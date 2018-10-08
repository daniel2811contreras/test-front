const initialState = {
  isAuthenticated: false,
  username: '',
  code: ''
}
import {AUTH_FAIL, AUTH_SUCCESS} from '../../constants/ActionTypes';

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.exist,
        username: action.username,
        code: action.code
      }
    case AUTH_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        username: action.email,
        code: action.code
      }
    default:
      return state
  }
}

export default authReducer;
