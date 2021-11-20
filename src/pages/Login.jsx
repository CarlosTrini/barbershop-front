import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import authActions from '../redux/auth/authActions';

import '../styles/layouts/login.scss';
import SpinnerAuth from '../components/SpinnerAuth';

const Login = () => {

   // things about reducer
   const dispatch = useDispatch(); // DISPATCH
   const { loginAction } = authActions;


   //react hook form 
   const { register, handleSubmit, formState: { errors } } = useForm();
   //send data form 
   const handleLogin = data => dispatch(loginAction(data));

   return (
      <>
         <div className="login-container">
            <form onSubmit={handleSubmit(handleLogin)}
               className="form-login"
            >
               <SpinnerAuth title={'bienvenido'}/>

               {/* INPUT USER  */}
               <div className="fields">
                  <label htmlFor="email" className="field-label">Correo eléctronico:</label>
                  <input type="text"
                     className="field-input"
                     id="email"
                     {
                     ...register(
                        "email",
                        { required: true, pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }
                     )
                     }
                  />

                  {errors.email?.type === 'required' && <p className="errors"> El email es requerido</p>}
                  {errors.email?.type === 'pattern' && <p className="errors"> Revisar que el email sea correcto</p>}

               </div>

               {/* INPUT PASSWORD  */}
               <div className="fields">
                  <label htmlFor="password" className="field-label">Contraseña:</label>
                  <input type="password"
                     className="field-input"
                     id="password"
                     {
                     ...register("password",
                        { required: true, minLength: 8 }
                     )
                     }
                  />
                  {errors.password?.type === 'required' && <p className="errors"> La contraseña es requerida</p>}
                  {errors.password?.type === 'minLength' && <p className="errors">Mínimo 8 carácteres</p>}
               </div>



               <div className="form-actions">
                  <button
                     className="btn btn-signin"
                     type="submit">Iniciar Sesión</button>

                  <Link to="/register" className="btn btn-register">Crear cuenta</Link>
               </div>
            </form>
         </div>
      </>
   )
}

export default Login;
