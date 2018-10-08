const initialState = {
  services: [],
  serviceNew:{},
  code:0,
  show:false
}
import {SERVICE_LOAD_CREATE} from '../../constants/ServiceTypes';

const ServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICE_LOAD_CREATE:
      return {
        ...state,
        services: action.services,
        serviceNew: action.serviceNew,
        code: action.code
      }
    default:
      return state
  }
}

export default ServiceReducer;
