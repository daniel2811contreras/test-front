/* import actions */
import axios from 'axios';
// import {Cookies} from 'react-cookie'
// import Is from 'is_js';

/*  cookies */
class Server {

  /* firt entry */
  constructor() {

    let _header={
    };

    this.req = axios.create({
      baseURL: global.conf.apiServer,
      headers: _header
    });
  }

}

//Export default
export default Server;
