import axiosClient from '../../config/axiosClient';
import axiosHeaderToken from '../../config/axiosHeaderToken';


import { AUTH_TYPES } from '../types';
import { alertBasic, alertTimer } from '../../helper/alertHelper';

const { LOGIN_SUCCESS, LOGIN_ERROR, REGISTER_SUCCESS, REGISTER_ERROR, LOADING, SIGNOUT  } = AUTH_TYPES;


// +++++++++++++++++++++++++  LOCALSTORAGE
const makeStorage = ({token, user, role, id}) => {
   localStorage.setItem('login', true);
   localStorage.setItem('token', token);
   localStorage.setItem('user', user);
   localStorage.setItem('role', role);
   localStorage.setItem('id', id);
}

const deleteStorage = () => {
   localStorage.removeItem('login');
   localStorage.removeItem('token');
   localStorage.removeItem('user');
   localStorage.removeItem('role');
   localStorage.removeItem('id');
}

// +++++++++++++++++++++++LOGIN ACTIONS
const loginAction = (data) => {
   return async (dispatch) => {
      dispatch(loadingFn());
      try {
         const res = await axiosClient.post('/login', data);
         if(res?.data?.error) {
            // eslint-disable-next-line no-throw-literal
            throw 'Ha ocurrido un error, intentelo de nuevo o revise su conexión';
         }
         const {token, user, role, id } = res.data.msg;
         makeStorage({token, user, role,id});
         dispatch(loginSuccesFn({token, user, role, id}));
         axiosHeaderToken(token);
      } catch (error) {
         console.error(error);
         dispatch(loginErrorFn());
         alertBasic('Error en login', error, 'error');
      }
   }
}
const loginSuccesFn = (userData) => ({
   type: LOGIN_SUCCESS,
   payload: userData
})
const loginErrorFn = () => ({
   type: LOGIN_ERROR,
})

// ************************ REGISTER ACTION
const registerAction = (newRegister) => {
   return async(dispatch) => {
      dispatch(loadingFn());
      try {
         const res = await axiosClient.post('/register', newRegister);
         if(res?.data?.error) {
            // eslint-disable-next-line no-throw-literal
            throw 'Ha ocurrido un error, intentelo de nuevo o revise su conexión';
         }
         const msg = res.data.msg;
         alertTimer(msg);
         dispatch(registerSuccessFn());
      } catch (error) {
         const err = error?.response?.data?.msg || error;
         console.error(err);
         dispatch(registerErrorFn());
         alertBasic('Error al registrar', err, 'error');
      }
   }
}
const registerSuccessFn = () => ({
   type: REGISTER_SUCCESS
})
const registerErrorFn = () => ({
   type: REGISTER_ERROR
})

// ************************** CLOSE SESION
const logOutAction = () => {
   return (dispatch) => {
      dispatch(logOutFn());
      deleteStorage();
   }
}
const logOutFn = () => ({
   type: SIGNOUT
})


// +++++ LOADING
const loadingFn = () => ({
   type: LOADING
});

// ACTIONS APP
const authActions = {
   loginAction,
   registerAction,
   logOutAction
}
export default authActions;