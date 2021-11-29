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
   LOADING_CLIENT
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
         console.error(error);
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

const makeReservationAction = (reservation) => {//ACTION
   return async(dispatch) => {
      try {
         const res = await axiosClient.post('/reservation/', reservation);
         console.log(res);
      } catch (error) {
         console.error(error)
      }
   }
}
const makeReservationFn = (reservation) => ({
   type: ADD_RESERVATION,
   payload: reservation
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
   makeReservationAction
}

export default clientActions;