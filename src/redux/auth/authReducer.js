// AUTH TYPES
import { AUTH_TYPES } from "../types";
const { LOGIN_SUCCESS, LOGIN_ERROR, REGISTER_SUCCESS, REGISTER_ERROR, LOADING } = AUTH_TYPES;


//INITIAL STATE
const initialState = {
   login: localStorage.getItem('login'),
   role: localStorage.getItem('role'),
   user: localStorage.getItem('user'),
   token: localStorage.getItem('token'),
   error: false,
   loading: false,
   registerSuccess: false
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOGIN_SUCCESS:
         return {
            ...state,
            login: true,
            role: action.payload.role,
            user: action.payload.user,
            token: action.payload.token,
            loading: false,
            registerSuccess:false
         };
      case REGISTER_ERROR:
      case LOGIN_ERROR:
         return {
            ...state,
            loading: false,
            registerSuccess:false
         };
      case REGISTER_SUCCESS:
         return {
            ...state,
            loading: false,
            registerSuccess: true
         }
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
