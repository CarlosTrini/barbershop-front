import axiosClient from '../../config/axiosClient';
import axiosHeaderToken from '../../config/axiosHeaderToken';
import {alertTimer} from '../../helper/alertHelper';
// TYPES
import { ADMIN_TYPES } from "../types";
const {
   GET_ALL_SERVICES,
   ADD_SERVICE,
   DELETE_SERVICE,
   UPDATE_SERVICE,
   GET_ALL_RESERVATIONS,
   GET_RESERVATION_BY_DATE
} = ADMIN_TYPES;


const setHeaderToken = () => {
   const token = localStorage.getItem('token');
   axiosHeaderToken(token);
}


// +++++++++++++++++++++++++ SERVICES

const getServicesAction = () => {
   setHeaderToken();
   return async(dispatch) => {
      try {
         console.log('headers => ', axiosClient.defaults.headers.common);
         const res = await axiosClient();
         if(res?.data?.error){
            throw res.data.msg
         }
         const services = res.data.msg;
         dispatch(servicesFn(services));
      } catch (error) {
         console.error(error.response.data.msg);
         const err = error?.response?.data?.msg || error;
         alertTimer('warning', err);
      }
   }
}
const servicesFn = (services) => ({
   type: GET_ALL_SERVICES,
   payload: services
})

// +++++++++++++++++++++++++ RESERVATIONS


const adminActions = {
   getServicesAction
}
export default adminActions;