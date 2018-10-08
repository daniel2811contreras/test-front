/* import Users */
import {push} from 'react-router-redux';
import {AUTH_FAIL, AUTH_SUCCESS} from '../../constants/ActionTypes';
import {Cookies} from 'react-cookie';
import Crypto from 'crypto-js';

/* import client request */
import Users from '../../api/UsersApi';

/* objects to request */
let _users = new Users();
const cookies = new Cookies();

/* do authetications */
const authS = (obj) => ({type: AUTH_SUCCESS, exist: obj.exist, username: obj.username, code: obj.code});
const authF = (obj) => ({type: AUTH_FAIL, exist: obj.exist, username: obj.username, code: obj.code})

/* auth success */
export const doLogin = (datos, redirect) => {
  /* retunr info to dispatch */
  return(dispatch) => {
    //Do call server api
    if(global.conf.mockServer){
      if(global.conf.authApi.user==datos.user && global.conf.authApi.pass==datos.pass){
        var _user = Crypto.AES.encrypt(datos.user, global.conf.keyCrypto).toString();
        var _pass = Crypto.AES.encrypt(datos.pass, global.conf.keyCrypto).toString();
        /* BACK API */
        cookies.set('access_log', _user, {path: '/'});
        cookies.set('access_tok', _pass, {path: '/'});
        /* response */
        var response = {
          exist: true,
          username: global.conf.authApi
        }
        /* dispach to reducer */
        dispatch(authS(response));
        dispatch(push(redirect));
      }else {
        var _call = {
          exist: false,
          username: '',
          code: 999
        };
        cookies.remove('access_log');
        cookies.remove('access_tok');
        /* call error */
        dispatch(authF(_call));
      }
    }else {
      _users.doLogin({user: datos.user, pass: datos.pass}).then((response) => {
      /* see response */
      var _data = response.data;
      if (_data.code != 102) {
        var _user = Crypto.AES.encrypt(_data.data.user, global.conf.keyCrypto).toString();
        var _pass = Crypto.AES.encrypt(_data.data.pass, global.conf.keyCrypto).toString();
        /* BACK API */
        cookies.set('access_log', _user, {path: '/'});
        cookies.set('access_tok', _pass, {path: '/'});

        /* response */
        var response = {
          exist: true,
          username: _data.data.user
        }

        /* dispach to reducer */
        dispatch(authS(response));
        dispatch(push(redirect));
      } else {
        var _call = {
          exist: false,
          code: 999
        }
        /* call error */
        dispatch(authF(_call));

        cookies.remove('access_log');
        cookies.remove('access_tok');
      }

    }).catch((response) => {
      console.log(response);
      var _call = {
        exist: false,
        username: '',
        code: 999
      }
      cookies.remove('access_log');
      cookies.remove('access_tok');

      /* call error */
      dispatch(authF(_call));
    });
  }
  }
}

/* export do Logout */
export const doLogout = () => {
  /* dologout */

  return(dispatch) => {
    /* return */

    var _call = {
      exist: false,
      username: '',
      code: 999
    }
    cookies.remove('access_log');
    cookies.remove('access_tok');

    dispatch(authF(_call));
  }
}

export const forceMove = (route) => {
  return(dispach) => {
    dispach(push(route));
  }
}
