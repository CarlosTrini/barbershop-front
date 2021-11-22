// TYPES
import { ADMIN_TYPES } from "../types";
const {
   GET_ALL_SERVICES,
   SERVICE_TO_EDIT,
   ADD_SERVICE,
   DELETE_SERVICE,
   UPDATE_SERVICE,
   GET_ALL_RESERVATIONS,
   GET_RESERVATION_BY_DATE,
   LOADING_ADMIN,
   RESET
} = ADMIN_TYPES;

const initialState = {
   services: [],
   newService: false,
   delService: false,
   updService: false,
   reservations: [],
   reservationDate: false,
   loading: false
};

const adminReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_ALL_SERVICES:
         return {
            ...state,
            services: action.payload,
            loading:false
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