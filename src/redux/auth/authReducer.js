// AUTH TYPES
import { AUTH_TYPES } from "../types";
const {LOGIN_SUCCESS, LOGIN_ERROR, REGISTER_SUCCESS, REGISTER_ERROR, LOADING} = AUTH_TYPES;


//INITIAL STATE
const initialState = {
   login: false,
   error: false,
   role: null,
   loading: false
};

const authReducer = (state = initialState, action) => {
   switch(action.type){
      case LOGIN_SUCCESS:
         return {
            ...state,
            loading: false
         };
      case LOGIN_ERROR: 
         return {
            ...state,
            loading: false
         };
      case REGISTER_SUCCESS: 
         return state;
      case REGISTER_ERROR:
         return state;
      case LOADING:
         return {
            ...state,
            loading: true
         }
      default:
         return state;
   }
}

export default authReducer;
