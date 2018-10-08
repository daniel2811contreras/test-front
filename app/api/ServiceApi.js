/* server */
import Server from './ServerApi';
import qs from 'qs';
import axios from 'axios';
import {Cookies} from 'react-cookie';
import Crypto from 'crypto-js';

const cookies = new Cookies();
/* class */
class Services extends Server {
  /* call parent */
  constructor() {
    super();
  }
    /* fetch login */
  doLogin(data) {
    /* return normal */
      return this.req.post('/api/loginApi/', qs.stringify({
        email: data.Service,
        password: data.pass
      }));
  }

}

/* export */
export default Services;
