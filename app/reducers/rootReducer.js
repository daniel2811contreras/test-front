/* deoendencies */
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

/*reducer into*/
import session from './session/SessionReducer';
import service from './service/ServiceReducer';


/* const */
const main = combineReducers({ session, service});
const _allReducer = combineReducers({routerReducer, main});

/* export default */
export default _allReducer;
