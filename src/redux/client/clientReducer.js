import { CLIENT_TYPES } from "../types";
const {
   GET_SERVICES,
   SERVICE_CATEGORY,
   ADD_CAR,
   DEL_ITEM_CAR,
   DEL_CAR,
   GET_CLIENT_RESERVATIONS,
   ADD_RESERVATION,
   DELETE_RESERVATION_CLIENT,
   LOADING_CLIENT
} = CLIENT_TYPES;


const initialState = {
   services: [],
   car: JSON.parse(localStorage.getItem('carServices')),
   reservationsClient: [],
   loading: false,
   delReservation: false
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
      case ADD_CAR:
         let dataCar = [];
         // first time
         if (state.car === null) {
            state.car = dataCar;
         }

         // check if the service exists
         if (state.car.some(s => s._id === action.payload._id)) {
            dataCar = state.car.map(s => {
               return s._id === action.payload._id ? { ...s, qty: s.qty + 1 } : s;
            })//map
         }
         else {
            // if car is not empty but service does not exists... add service
            dataCar = [...state.car, { ...action.payload, qty: 1 }];
         }

         //save in localstorage
         localStorage.setItem('carServices', JSON.stringify(dataCar));

         return {
            ...state,
            car: dataCar
         }

      case DEL_ITEM_CAR:
         let carDelItems = [];
         let needFilter = false;

         carDelItems = state.car.map(s => {
            if (s._id === action.payload._id && s.qty > 1) {
               return { ...s, qty: s.qty - 1 }
            }
            else if (s._id === action.payload._id && s.qty === 1) {
               needFilter = true;
            }
            return s;
         })

         let carUpdated = needFilter
            ? state.car.filter(i => i._id !== action.payload._id)
            : carDelItems;

         if (carUpdated.length < 1) {
            localStorage.removeItem('carServices')
            carUpdated = null;
         } else {
            localStorage.setItem('carServices', JSON.stringify(carUpdated));
         }

         return {
            ...state,
            car: carUpdated
         }

      case ADD_RESERVATION:
         let filterCar;
         filterCar = state.car.filter(s => s._id !== action.payload);

         if (filterCar.length < 1) {
            localStorage.removeItem('carServices')
            filterCar = null;
         } else {
            localStorage.setItem('carServices', JSON.stringify(filterCar));
         }

         return {
            ...state,
            car: filterCar,
            loading: false
         }

      case DEL_CAR:
         return {
            ...state,
            car: null
         }

      case GET_CLIENT_RESERVATIONS:
         return {
            ...state,
            reservationsClient: typeof(action.payload) === 'string' ? [] : action.payload,
            loading: false
         }

      case DELETE_RESERVATION_CLIENT:
      
         return {
            ...state,
            delReservation: false

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