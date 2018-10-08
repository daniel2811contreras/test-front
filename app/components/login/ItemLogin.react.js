/* connect redux element */
import React from 'react';
import PropTypes from 'prop-types';

/* class */
class ItemLogin extends React.Component {

  static propTypes = {
    doLogin: PropTypes.func.isRequired
  }

  state = {
    user: '',
    pass: ''
  }

  constructor() {
    super();
  }

  _handleChange(e) {
    var target = e.target;

    this.setState({
      [target.name]: target.value
    })
  }

  _handleSubmit(e) {
    e.preventDefault();
  /* handle change */
    this.props.doLogin({user: this.state.user, pass: this.state.pass}, this.props.from);
  }

  render() {
    return (<div className="__bot-login-cont">
      <div className="__bot-section-header">
        <img src={global.conf.mediaApi + "/img/login/icon.png"} className="img-login"/>
      </div>
      <div className="column is-10 __bot-section-form is-offset-1">
        <div className="has-text-centered __header-login">Test Services</div>

        <div className="__form-login">
          <form onSubmit={this._handleSubmit.bind(this)}>
            <div className="field __field-login">
              <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Username" value={this.state.user} name="user" onChange={this._handleChange.bind(this)} />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </p>
            </div>

            <div className="field __field-login">
              <p className="control has-icons-left">
                <input className="input" type="password" placeholder="Password" value={this.state.pass} name="pass" onChange={this._handleChange.bind(this)} autoComplete="off"/>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>

            <div className="control __control-login">
              <button className="button is-primary" type="submit">Login</button>
            </div>

            <div className="field __field-forgot">
              {/*
              <a href="#">Forgot my password</a>
              */}
            </div>
          </form>
        </div>
      </div>
    </div>)
  }
}

export default ItemLogin;
