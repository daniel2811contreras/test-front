/* import react container */
import React from 'react';
import {connect} from 'react-redux';
import {PropTypes, instanceOf} from 'prop-types';
import {withCookies, Cookies} from 'react-cookie';
import Is from 'is_js';
import Crypto from 'crypto-js';
import {Link} from 'react-router-dom';

/* Logout */
import {doLogout} from '../../actions/session/SessionActions';

/* export */
class Header extends React.Component {
  static propTypes = {
    // doLogin: PropTypes.func.isRequired,
    cookies: instanceOf(Cookies).isRequired
  }

  /* create init constructor */
  constructor() {
    /* call parent */
    super();
    this.state = {
      bot: null,
      bots: [
        {
          id_bot: 0,
          id_page: "",
          name_bot: "",
          name_integration: "",
          name_platform: ""
        }
      ]
    }
  }

  /* logout */
  _handleLogOut() {
    /* return logout */
    this.props.doLogout();
  }
  _goBot(info) {
    const {cookies} = this.props;
    this.setState({bot: info});
    let _info=Crypto.AES.encrypt(JSON.stringify(info), global.conf.keyCrypto).toString();
    cookies.set('con-bot', _info, {path: '/'});
  }
  componentDidMount() {

  }
  _listBots() {
    let list = this.state.bots;
    list = list.map((data, i) => {
      return (<a className="navbar-item __item-menu" key={i} onClick={this._goBot.bind(this, data)}>
        <i className="fas fa-robot"></i>
        &nbsp;{data.name_bot}
      </a>);
    });
    // console.log(list);
    return list;
    // return list=(<div>{list}</div>);
  }
  _activeBot() {
    let bot = "";
    if (Is.not.null(this.state.bot)) {
      return (<div className="navbar-item">
        <a className="button is-info is-outlined is-rounded">{this.state.bot.name_bot}</a>
        {/* <Link to="messages" className="button is-info is-outlined is-rounded">{this.state.bot.name_bot}</Link> */}
      </div>);
    }
  }
  /* render */
  render() {

    /* JSX */
    return (<nav className="navbar is-transparent is-fixed-top __panel_header_top">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src={global.conf.mediaApi + "/img/login/icon.png"}/>
          <span className="__item-title-project">Test Services</span>
        </a>
        <div className="navbar-burger burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start __main-menu-search">
        </div>

        <div className="navbar-end  __main-menu-profile">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="button __button-icon-no-border _button-sign-out tooltip is-tooltip-bottom" data-tooltip="Sign Out" onClick={this._handleLogOut.bind(this)}>
                  <span className="icon">
                    <i className="fas fa-power-off"></i>
                  </span>
                </a>
              </p>
              {/* <p className="control">
                <a className="button __button-icon-no-border">
                  <span className="icon">
                    <i className="fas fa-th-large"></i>
                  </span>
                </a>
              </p> */
              }
              <div className="control">
                <a className="">
                  <figure className="image __main-img-profile">
                    <img src={global.conf.mediaApi + "/img/user/images.png"}/>
                  </figure>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>)
  }
}

/* dispatcj to props */
let mapDisToProps = (state, ownProps) => {
  return {doLogout: doLogout}
}

export default connect(null, mapDisToProps())(withCookies(Header));
