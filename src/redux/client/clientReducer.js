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


const initialState = {
   services: [],
   car: [],
   reservationsClient: [],
   addReservation: false,
   loading: false
}

const clientReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_SERVICES:
      case SERVICE_CATEGORY:
         return {
            ...state,
            services: action.payload,
            loading: false
         }
      case LOADING_CLIENT:
         return {
            ...state,
            loading: action.payload
         }
      default:
         return state;
   }
}

export default clientReducer;