/* report system js */
const _conf = require('../app/conf/conf.js');

/* set Conf in local variable */

/* return base url to app */
function _base_url() {

  /* main_url */
  var _main_url = (_conf.base_url)
    ? _conf.base_url
    : 'http://127.0.0.1'

  /* var port */
  var _port = _get_port();
  var _dots = (_port)
    ? ':'
    : '';
  /* return main url */
  return _main_url + _dots + _port;
}

/* retunr port */
function _get_port() {
  //retunr port
  return (_conf.port)
    ? _conf.port
    : (process.env.PORT || '80');
}

/* using name minify filename */
function _filename_debug() {
  /* return port */
  if (_conf.minify) {
    _conf.outputFile = _conf.fileName + ".min.js" ;
  }else{
    _conf.outputFile =  _conf.fileName + "-debug.js";
  }

  _conf.fileName = _conf.fileName + ".js";

}


/*Execute all functions*/
_filename_debug();

/* global conf */
global.url = {
  BASE_URL: _base_url(),
  PORT: _get_port()
};

global.conf = _conf;
