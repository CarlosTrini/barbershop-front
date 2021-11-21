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

const initialState = {
   services: [],
   newService: null,
   delService: null,
   updService: null,
   reservations: [],
   reservationDate: null
};

const adminReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_ALL_SERVICES:
         return {
            ...state,
            services: action.payload
         }
      default:
         return state;
   }
}

export default adminReducer;