import {push} from 'react-router-redux';
import {SERVICE_LOAD_CREATE} from '../../constants/ServiceTypes';


import {Cookies} from 'react-cookie';
import Crypto from 'crypto-js';

/* import company request */
import Service from '../../api/ServiceApi';

/* objects to request */

let _service=new Service();
const cookies=new Cookies();

/* do list company */
const create = (obj) => ({type:SERVICE_LOAD_CREATE, services: obj.services, ServiceNew: obj.ServiceNew, code:obj.code});
/* list company success */


export const doCreate = (data) => {
  // console.log(cookies.get('id_company'));
  return (dispatch)=>{
    // su fuera a un api
    // _service.doCreate(data).then((response)=>{
      var _data={
        service:data.service,
        addressOrigin:data.addressOrigin,
        destinationAddress:data.destinationAddress,
        descripcion:data.descripcion,
        typeTravel:data.typeTravel,
      };
      var _list=data.list;
      _list.push(_data);
      var _json={
          services:_list,
          serviceNew:_data,
          code: 201
        };

      dispatch(create(_json));
    // });

  }
}
