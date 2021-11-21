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
            services: action.payload
         }
      case ADD_SERVICE: 
         return {
            ...state,
            newService: action.payload,
            loading: false
      }
      case LOADING:
         return {
            ...state,
            loading: true
      }
      case RESET:
         return {
            ...state,
            [action.payload.stateName] : action.payload.stateValue
         }
      default:
         return state;
   }
}

export default adminReducer;