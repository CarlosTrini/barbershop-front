import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/layouts/register.scss';

import { useSelector, useDispatch } from 'react-redux';
import authActions from '../redux/auth/authActions';
import SpinnerAuth from '../components/SpinnerAuth';

const Register = () => {
   // things about reducer
   const dispatch = useDispatch();
   const {registerSuccess} = useSelector(state => state.authReducer);
   const navigate = useNavigate();

   //react hook form 
   const { register, handleSubmit, formState: { errors }, getValues } = useForm();

   //send data with the action
   const handleRegister = (data) => dispatch(authActions.registerAction(data));

   useEffect( () => {
      registerSuccess && navigate('/login');
      
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[registerSuccess]);

   return (
      <div className="">
         <div className="register-container">
            <form onSubmit={handleSubmit(handleRegister)}
               className="form-register"
            >
               <SpinnerAuth title={'registro'}/>


               <div className="register-section-one">
                  {/* ++++++++++++INPUT NAME++++++++++++++++  */}
                  <div className="fields">
                     <label htmlFor="name" className="field-label">Ingresa tu nombre:</label>
                     <input type="text"

                        className="field-input"
                        id="name"
                        {
                        ...register(
                           "name",
                           { required: true }
                        )
                        }
                     />

                     {errors.name?.type === 'required' && <p className="errors"> El nombre es requerido</p>}
                  </div>


                  {/* ++++++++++++INPUT USER++++++++++++++++  */}
                  <div className="fields">
                     <label htmlFor="user" className="field-label">Ingresa tu usuario:</label>
                     <input type="text"
                        className="field-input"
                        id="user"
                        {
                        ...register(
                           "user",
                           { required: true }
                        )
                        }
                     />

                     {errors.user?.type === 'required' && <p className="errors"> El usuario es requerido</p>}
                  </div>


                  {/* ++++++++++++INPUT EMAIL++++++++++++++++  */}
                  <div className="fields">
                     <label htmlFor="email" className="field-label">Correo eléctronico:</label>
                     <input type="email"
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

               </div>{/* cierre register-secction-one */}


               <div className="register-section-two">


                  {/* INPUT PASSWORD  */}
                  <div className="fields">
                     <label htmlFor="password" className="field-label">Contraseña: </label>
                     <input type="password"
                        className="field-input"
                        id="password"
                        name="password"
                        {
                        ...register("password",
                           { required: true, minLength: 8 }
                        )
                        }
                     />
                     {errors.password?.type === 'required' && <p className="errors"> La contraseña es requerida</p>}
                     {errors.password?.type === 'minLength' && <p className="errors">  Mínimo 8 carácteres</p>}
                  </div>

                  {/* INPUT PASSWORD CONFIRM  */}
                  <div className="fields">
                     <label htmlFor="passwordConfirm" className="field-label">Confimar contraseña: </label>
                     <input type="password"
                        className="field-input"
                        id="passwordConfirm"
                        {
                        ...register("passwordConfirm",
                           {
                              required: true, minLength: 8, validate: value => {
                                 //get password value from field
                                 const password = getValues('password');
                                 // check if the password and passwordConfirm are the same
                                 return value === password
                              }
                           }
                        )
                        }
                     />
                     {errors.passwordConfirm?.type === 'required' && <p className="errors"> La contraseña de confirmación es requerida</p>}
                     {errors.passwordConfirm?.type === 'minLength' && <p className="errors">  Mínimo 8 carácteres</p>}
                     {errors.passwordConfirm?.type === 'validate' && <p className="errors"> pass no iguales</p>}

                  </div>
               </div>{/* cierre register-secction-two */}

               <div className="form-actions">
                  <button
                     className="btn btn-register"
                     type="submit">Registrarme</button>
                  <Link to="/login" className="btn btn-cancel">Cancelar</Link>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Register;