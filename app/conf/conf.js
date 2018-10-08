/* Using enviroment */
global.enviroment = 'dev';

/* Using to export constants */
const conf = {
  dev: {},
  prod: {},
  test: {},
}

/* Enviroment on development */
conf['dev']['base_url'] = 'http://127.0.0.1';
// conf['dev']['base_url'] = 'http://prueba-test-user.herokuapp.com';
// conf['dev']['port'] = '';
conf['dev']['port'] = '';
// conf['dev']['apiServer'] = 'http://prueba-test-user.herokuapp.com/';
conf['dev']['apiServer'] = 'http://127.0.0.1:2000/';
conf['dev']['fileName'] = 'all_dist';
conf['dev']['minify'] = true;
// conf['dev']['mediaApi'] = 'https://prueba-test-user.herokuapp.com/dist/';
conf['dev']['mediaApi'] = 'http://127.0.0.1/dist';
conf['dev']['keyCrypto'] = 'K30s2018G4@';
conf['dev']['mockServer'] = true;

/* auth api */
conf['dev']['authApi'] = {
  'user': 'test@test.com',
  'pass': '123'
};

/* Enviroment on production */
conf['prod']['base_url'] = 'https://test-user.herokuapp.com';
conf['prod']['port'] = '';
conf['prod']['apiServer'] = 'https://prueba-test-user.herokuapp.com/api/';
conf['prod']['fileName'] = 'all_dist';
conf['prod']['minify'] = true;
conf['prod']['mediaApi'] = 'https://test-user.herokuapp.com/dist/';
conf['prod']['keyCrypto'] = 'K30s2018G4@';
conf['prod']['mockServer'] = false;

/* auth api */
conf['prod']['authApi'] = {
  'user': 'test@test.com',
  'pass': '123'
};

/* Export constants */
module.exports = conf[global.enviroment];
