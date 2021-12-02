// AUTH TYPES
import { AUTH_TYPES } from "../types";
const { LOGIN_SUCCESS, LOGIN_ERROR, REGISTER_SUCCESS, REGISTER_ERROR, LOADING, SIGNOUT } = AUTH_TYPES;


//INITIAL STATE
const initialState = {
   login: localStorage.getItem('login'),
   role: localStorage.getItem('role'),
   user: localStorage.getItem('user'),
   token: localStorage.getItem('token'),
   id: localStorage.getItem('id'),
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
            id: action.payload.id,
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
      case SIGNOUT: 
         return {
            ...state,
            login: false,
            role: null,
            user: null,
            token:null,
            id: null
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
