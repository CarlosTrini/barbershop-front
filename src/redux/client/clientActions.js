import axiosClient from "../../config/axiosClient";
import axiosHeaderToken from "../../config/axiosHeaderToken";
import { alertTimer } from "../../helper/alertHelper";
import { CLIENT_TYPES } from "../types";

const {
   GET_SERVICES,
   SERVICE_CATEGORY,
   ADD_CAR,
   DEL_ITEM_CAR,
   DEL_CAR,
   GET_CLIENT_RESERVATIONS,
   ADD_RESERVATION,
   LOADING_CLIENT,
   DELETE_RESERVATION_CLIENT
} = CLIENT_TYPES;


const setHeaderToken = () => {
   const token = localStorage.getItem('token');
   axiosHeaderToken(token);
}

const checkStatus = (status) => {
   const err = status === 401 ? 'No autorizado' : 'Revise su conexión o intente más tarde';
   alertTimer('error', err);
}

// -------------- GET SERVICES
const getServicesAction = () => { //ACTION
   return async (dispatch) => {
      dispatch(loadingFn(true));
      try {
         const res = await axiosClient.get();
         if (res?.data?.error) {
            throw res.data.msg
         }
         const services = res.data.msg;
         dispatch(getServicesFn(services));
      } catch (error) {
         console.error(error.response);
         alertTimer('warning', 'Ha ocurrido un error revise su conexión o intente más tarde');
      }
   }
}
const getServicesFn = (services) => ({
   type: GET_SERVICES,
   payload: services
})

const getServiceCategory = (category) => { // ACTION
   return async (dispatch) => {
      try {
         const res = await axiosClient.get(`/services/${category}`);
         if (res?.data?.error) {
            throw res.data.msg
         }
         const services = res.data.msg;
         dispatch(serviceCategoryFn(services));
      } catch (error) {
         console.error(error);
         alertTimer('warning', 'Ha ocurrido un error revise su conexión o intente más tarde');
      }
   }
}
const serviceCategoryFn = (servicesFilter) => ({
   type: SERVICE_CATEGORY,
   payload: servicesFilter
})

const addItemCarAction = (service) => { // ACTION
   return (dispatch) => {
      dispatch({
         type: ADD_CAR,
         payload: service
      });
   }
}

const delItemCarAction = (service) => {//ACTION
   return (dispatch) => {
      dispatch({
         type: DEL_ITEM_CAR,
         payload: service
      });
   }
}

const delCarAction = () => { //ACTION
   return (dispatch) => {
      dispatch({
         type: DEL_CAR
      })
   }
}

const makeReservationAction = (reservation, id) => {//ACTION
   setHeaderToken();
   return async (dispatch) => {
      dispatch(loadingFn(true));
      try {
         const res = await axiosClient.post('/reservation/', reservation);
         if (res?.data?.error) {
            throw res.data.msg
         }
         dispatch(makeReservationFn(id));
         alertTimer('success', 'La cita fue generada de manera exitosa... Te esperamos!');
      } catch (error) {
         console.error(error.response);
         checkStatus(error?.response?.status || error);
         dispatch(loadingFn(false));
      }
   }
}
const makeReservationFn = (idReservation) => ({
   type: ADD_RESERVATION,
   payload: idReservation
})

const getReservationsAction = (idUser) => { // ACTION
   setHeaderToken();
   return async (dispatch) => {
      dispatch(loadingFn(true));
      try {
         const res = await axiosClient.get(`/reservation/client/${idUser}`);
         if (res?.data?.error) {
            throw res.data.msg
         }
         const reservations = res.data.msg;
         dispatch(getReservationsFn(reservations));
      } catch (error) {
         console.error(error.response);
         checkStatus(error?.response?.status || error);
         dispatch(loadingFn(false));
      }
   }
}
const getReservationsFn = (reservations) => ({
   type: GET_CLIENT_RESERVATIONS,
   payload: reservations
})


const delReservationAction = (id) => { //ACTION
   setHeaderToken();
   return async(dispatch) => {
      try {
         const res = await axiosClient.delete(`/reservation/${id}`);
         if (res?.data?.error) {
            // eslint-disable-next-line no-throw-literal
            throw 200;
         }
         alertTimer('success', 'Reservación eliminada');

         dispatch(delReservationFn());
      } catch (error) {
         console.error(error.response.data);
         checkStatus(error?.response?.status || error);
         dispatch(delReservationFn());
      }
   }
}
const delReservationFn = (result) => ({
   type: DELETE_RESERVATION_CLIENT,
   payload: result
})


// LOADING
const loadingFn = (status) => ({
   type: LOADING_CLIENT,
   payload: status
})

// object actions
const clientActions = {
   getServicesAction,
   getServiceCategory,
   addItemCarAction,
   delItemCarAction,
   delCarAction,
   makeReservationAction,
   getReservationsAction,
   delReservationAction
}

export default clientActions;