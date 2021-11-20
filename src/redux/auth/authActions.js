import axiosClient from '../../config/axiosClient';

import { AUTH_TYPES } from '../types';
import { alertBasic } from '../../helper/alertHelper';


const { LOGIN_SUCCESS, LOGIN_ERROR, REGISTER_SUCCESS, REGISTER_ERROR, LOADING } = AUTH_TYPES;

// +++++++++++++++++++++++LOGIN ACTIONS
const loginAction = (data) => {
   return async (dispatch) => {
      dispatch(loadingFn());
      try {
         const res = await axiosClient.post('/login', data);
         if (res?.data?.error) {
            throw res.data.msg;
         }
         console.log(res.data);
         dispatch(loginSuccesFn());
      } catch (error) {
         console.error(error);
         dispatch(loginErrorFn());
         alertBasic('Error en login', error, 'error');
      }
   }
}
const loginSuccesFn = () => ({
   type: LOGIN_SUCCESS
})
const loginErrorFn = (msg) => ({
   type: LOGIN_ERROR,
})

const loadingFn = () => ({
   type: LOADING
});

// ACTIONS APP
const authActions = {
   loginAction
}
export default authActions;