import axiosClient from '../../config/axiosClient';
import axiosHeaderToken from '../../config/axiosHeaderToken';
import { alertTimer } from '../../helper/alertHelper';
// TYPES
import { ADMIN_TYPES } from "../types";
const {
   GET_ALL_SERVICES,
   SERVICE_TO_EDIT,
   ADD_SERVICE,
   DELETE_SERVICE,
   UPDATE_SERVICE,
   GET_ALL_RESERVATIONS,
   DELETE_RESERVATION,
   GET_RESERVATION_BY_DATE,
   LOADING_ADMIN,
   RESET
} = ADMIN_TYPES;


const setHeaderToken = () => {
   const token = localStorage.getItem('token');
   axiosHeaderToken(token);
}

const checkStatus = (status) => {
   const err = status === 401 ? 'No autorizado' : 'Revise su conexión o intente más tarde';
   alertTimer('error', err);
}

// +++++++++++++++++++++++++ SERVICES

const getServicesAction = () => { //ACTION
   return async (dispatch) => {
      try {
         const res = await axiosClient.get();
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
      dispatch(loadingAdminFn());
      try {
         const res = await axiosClient.post('/service', newService);
         if (res?.data?.error) {
            console.error(res.data);
            // eslint-disable-next-line no-throw-literal
            throw 200;
         }
         dispatch(newServiceFn(true));
      } catch (error) {
         console.error(error);
         checkStatus(error?.response?.status || error);
         // dispatch(newServiceFn(false));
      }
   }
}
const newServiceFn = (result) => ({
   type: ADD_SERVICE,
   payload: result
})

const delServiceAction = (id) => { // ACTION
   setHeaderToken();
   return async(dispatch)  => {
      dispatch(loadingAdminFn());
      try {
         const res = await axiosClient.delete(`/service/${id}`);
         if (res?.data?.error) {
            console.error(res.data);
            // eslint-disable-next-line no-throw-literal
            throw 200;
         }
         dispatch(delServiceFn(true));
      } catch (error) {
         console.error(error);
         checkStatus(error?.response?.status || error);
         dispatch(delServiceFn(false));
      }
   }
}
const delServiceFn = (result) => ({
   type: DELETE_SERVICE,
   payload: result
})


const getServiceAction = (id) => { //ACTION
   setHeaderToken();
   return async(dispatch) => {
      dispatch(loadingAdminFn());
      try {
         const res = await axiosClient.get(`/service/${id}`);
         if (res?.data?.error) {
            console.error(res.data);
            // eslint-disable-next-line no-throw-literal
            throw 200;
         }
         const service = res.data.msg;
         dispatch(getServiceFn(service));
      } catch (error) {
         console.error(error);
         checkStatus(error?.response?.status || error);
      }
   }
}
const getServiceFn = (service) => ({
   type: SERVICE_TO_EDIT,
   payload: service
})


const updateServiceAction = (service) => { //ACTION
   return async(dispatch) => {
      try {
         const res = await axiosClient.put('/service/', service);
         if (res?.data?.error) {
            console.error(res.data);
            // eslint-disable-next-line no-throw-literal
            throw 200;
         }
         dispatch(updateServiceFn(true));
      } catch (error) {
         console.error(error);
         checkStatus(error?.response?.status || error);
         dispatch(updateServiceFn(false));
      }
   }
}
const updateServiceFn = (result) => ({
   type: UPDATE_SERVICE,
   payload: result
})

// +++++++++++++++++++++++++ RESERVATIONS
const getReservationDateAction = (date) => {
   setHeaderToken();
   return async(dispatch) => {
      try {
          const res = await axiosClient.get(`/reservation/date/${date}`);
          if (res?.data?.error) {
            console.error(res.data);
            // eslint-disable-next-line no-throw-literal
            throw 200;
         }
         const reservations = res.data.msg;
         dispatch(reservationFn(reservations));
      } catch (error) {
         console.error(error);
         checkStatus(error?.response?.status || error);
      }
   }
}
const reservationFn = (reservations) => ({
   type: GET_RESERVATION_BY_DATE,
   payload: reservations
})


const deleteReservationAction = (id) => {
   setHeaderToken();
   return async(dispatch) => {
      try {
         const res = await axiosClient.delete(`/reservation/${id}`);
         if (res?.data?.error) {
            console.error(res.data);
            // eslint-disable-next-line no-throw-literal
            throw 200;
         }
         dispatch(deleteReservationFn(true));
      } catch (error) {
         console.error(error);
         checkStatus(error?.response?.status || error);
         dispatch(deleteReservationFn(false));
      }
   }
}
const deleteReservationFn = (result) => ({
   type: DELETE_RESERVATION,
   payload: result
})


// ++++++++++++ LOADING
const loadingAdminFn = () => ({
   type: LOADING_ADMIN
});

const resetAction = (stateName, stateValue = false) => (dispatch) => {
   dispatch({
      type: RESET,
      payload: {stateName, stateValue}
   });
}

const adminActions = {
   getServicesAction,
   getServiceAction,
   newServiceAction,
   delServiceAction,
   updateServiceAction,
   getReservationDateAction,
   deleteReservationAction,
   resetAction
}
export default adminActions;