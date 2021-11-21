import axiosClient from '../../config/axiosClient';
import axiosHeaderToken from '../../config/axiosHeaderToken';
import { alertTimer } from '../../helper/alertHelper';
// TYPES
import { ADMIN_TYPES } from "../types";
const {
   GET_ALL_SERVICES,
   ADD_SERVICE,
   DELETE_SERVICE,
   UPDATE_SERVICE,
   GET_ALL_RESERVATIONS,
   GET_RESERVATION_BY_DATE,
   LOADING,
   RESET
} = ADMIN_TYPES;


const setHeaderToken = () => {
   const token = localStorage.getItem('token');
   axiosHeaderToken(token);
}


// +++++++++++++++++++++++++ SERVICES

const getServicesAction = () => { //ACTION
   //  setHeaderToken();
   return async (dispatch) => {
      try {
         const res = await axiosClient();
         if (res?.data?.error) {
            throw res.data.msg
         }
         const services = res.data.msg;
         dispatch(servicesFn(services));
      } catch (error) {
         console.error(error);
         alertTimer('warning', 'Ha ocurrido un error revise su conexión o intente más tarde');
      }
   }
}
const servicesFn = (services) => ({
   type: GET_ALL_SERVICES,
   payload: services
})


const newServiceAction = (newService) => {  //ACTION
   setHeaderToken();
   return async (dispatch) => {
      dispatch(loadingFn());
      try {
         const res = await axiosClient.post('/service', newService);
         if (res?.data?.error) {
            throw res.data.msg
         }
         dispatch(newServiceFn(true));
      } catch (error) {
         console.error(error);
         alertTimer('warning', 'Ha ocurrido un error revise su conexión o intente más tarde');
         dispatch(newServiceFn(false));
      }
   }
}
const newServiceFn = (result) => ({
   type: ADD_SERVICE,
   payload: result
})

// +++++++++++++++++++++++++ RESERVATIONS





// ++++++++++++ LOADING
const loadingFn = () => ({
   type: LOADING
});

const resetAction = (stateName, stateValue) => (dispatch) => {
   dispatch({
      type: RESET,
      payload: {stateName, stateValue}
   });
}

const adminActions = {
   getServicesAction,
   newServiceAction,
   resetAction
}
export default adminActions;