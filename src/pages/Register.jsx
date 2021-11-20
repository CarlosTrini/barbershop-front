import React, { useRef } from 'react';

import icon from '../images/barber-icon.png';
import '../styles/layouts/register.scss';

import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';

const Register = () => {
   const pass = useRef('null');
   const { register, handleSubmit, formState: { errors } } = useForm();
   const handleRegister = (data) => {
      console.log(data);
   }



   return (
      <div className="">
         <div className="register-container">
            <form onSubmit={handleSubmit(handleRegister)}
               className="form-register"
            >
               <figure className="form-icon">
                  <img src={icon} alt="" />
               </figure>

               <h2 className="form-title">Registro</h2>

               <div className="register-section-one">
                  {/* ++++++++++++INPUT NAME++++++++++++++++  */}
                  <div className="fields">
                     <label htmlFor="name" className="field-label">Ingresa tu nombre:</label>
                     <input type="text"
                        ref={pass}

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
                           { required: true, minLength: 8 }
                        )
                        }
                     />
                     {errors.passwordConfirm?.type === 'required' && <p className="errors"> La contraseña de confirmación es requerida</p>}
                     {errors.passwordConfirm?.type === 'minLength' && <p className="errors">  Mínimo 8 carácteres</p>}

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