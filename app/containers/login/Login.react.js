/* import dependencies */
import React from 'react';
import {connect} from 'react-redux';
import {PropTypes, instanceOf} from 'prop-types';
import {withCookies, Cookies} from 'react-cookie';
import Is from 'is_js';
import Crypto from 'crypto-js';

/* actions */
import {doLogin, forceMove} from '../../actions/session/SessionActions'

/* import login */
import ItemLogin from '../../components/login/ItemLogin.react';

/* class */
class Login extends React.Component {

  static propTypes = {
    doLogin: PropTypes.func.isRequired,
    cookies: instanceOf(Cookies).isRequired
  }

  state = {
    redirectToReferrer: false
  };

  /* contructor */
  constructor() {
    super();
  }

  /* componentDid Mount */
  componentDidMount() {
    this._hasSession();
  }

  /* verify session */
  _hasSession() {
    /* cookies */
    let _from = (this.props.location.state)
      ? this.props.location.state.from.pathname
      : '/';
    const {cookies} = this.props;

    if (!Is.any.undefined(cookies.get('access_log'), cookies.get('access_tok'))) {
      /* api  */
      let _user= Crypto.AES.decrypt(cookies.get('access_log'), global.conf.keyCrypto).toString(Crypto.enc.Utf8);
      let _pass= Crypto.AES.decrypt(cookies.get('access_tok'), global.conf.keyCrypto).toString(Crypto.enc.Utf8);

      /* props */
      this.props.doLogin({
        user: _user,
        pass: _pass
      }, _from);
    }
  }

  /* render */
  render() {
    const {cookies} = this.props;
    let _from = (this.props.location.state)
      ? this.props.location.state.from.pathname
      : '/';
    if (!Is.all.undefined(cookies.get('access_log'), cookies.get('access_pass'))) {
      return (<div></div>);
    }
    return (<section className="hero is-fullheight has-text-centered __main-section-login">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <ItemLogin doLogin={this.props.doLogin} from={_from}/>
            </div>
          </div>
        </div>
      </div>
    </section>);
  }

}

/* sipatch to prop */
var mapDisToProps = (state, ownProps) => {
  return {doLogin: doLogin, forceMove: forceMove}
}

export default connect(null, mapDisToProps())(withCookies(Login));
