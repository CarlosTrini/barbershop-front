// TYPES
import { ADMIN_TYPES } from "../types";
const {
   GET_ALL_SERVICES,
   SERVICE_TO_EDIT,
   ADD_SERVICE,
   DELETE_SERVICE,
   UPDATE_SERVICE,
   DELETE_RESERVATION,
   GET_RESERVATION_BY_DATE,
   LOADING_ADMIN,
   RESET
} = ADMIN_TYPES;

const initialState = {
   services: [],
   newService: false,
   delService: false,
   updService: false,
   updServiceResult: false,
   reservations: [],
   reservationDate: false,
   delReservation: false,
   loading: false
};

const adminReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_ALL_SERVICES:
         return {
            ...state,
            services: action.payload,
            loading: false
         }
      case ADD_SERVICE:
         return {
            ...state,
            newService: action.payload,
            loading: false
         }
      case DELETE_SERVICE:
         return {
            ...state,
            delService: action.payload,
            loading: false
         }
      case SERVICE_TO_EDIT:
         return {
            ...state,
            updService: action.payload
         }
      case LOADING_ADMIN:
         return {
            ...state,
            loading: true
         }
      case UPDATE_SERVICE:
         return {
            ...state,
            updServiceResult: action.payload,
         }
      case GET_RESERVATION_BY_DATE:
         return {
            ...state,
            reservations: action.payload
         }
      case DELETE_RESERVATION: 
         return {
            ...state,
            delReservation: action.payload
         }
      case RESET:
         return {
            ...state,
            [action.payload.stateName]: action.payload.stateValue
         }
      default:
         return state;
   }
}

export default adminReducer;