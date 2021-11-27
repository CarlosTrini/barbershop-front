import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

import LayoutAdmin from '../../components/admin/LayoutAdmin';

import { useSelector, useDispatch } from 'react-redux';
import adminActions from '../../redux/admin/adminActions';

import '../../styles/layouts/newService.scss';

const NewService = () => {

   const navigate = useNavigate();

   // admin reducer
   const dispatch = useDispatch();
   const { loading, newService } = useSelector(state => state.adminReducer);

   // react hook form 
   const { handleSubmit, register, formState: { errors } } = useForm();

   // send new service
   const handleService = (data) => dispatch(adminActions.newServiceAction(data));


   useEffect(() => {
      if (newService) {
         dispatch(adminActions.resetAction('newService', false));
         navigate('/admin/');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [newService]);


   return (
      <LayoutAdmin>
         <section>
            <form onSubmit={handleSubmit(handleService)}
               className="form-container"
            >
               <h2 className="form-title new-service">
                  {
                     loading ? 'Procesando...' : 'Nuevo servicio'
                  }
               </h2>

               {/* INPUT SERVICE  */}
               <div className="fields">
                  <label htmlFor="service" className="field-label">Nombre del servicio:</label>
                  <input type="text"
                     className="field-input"
                     id="service"
                     {
                     ...register(
                        "service",
                        { required: true }
                     )
                     }
                  />
                  {errors.service?.type === 'required' && <p className="errors"> Nombre de servicio requerido</p>}

               </div>

               {/* INPUT PRICE  */}
               <div className="fields">
                  <label htmlFor="price" className="field-label">Precio:</label>
                  <input type="number"
                     className="field-input"
                     id="price"
                     {
                     ...register("price",
                        { required: true, validate: value => value > 0 }
                     )
                     }
                  />
                  {errors.price?.type === 'required' && <p className="errors"> El precio es requerido</p>}
                  {errors.price?.type === 'validate' && <p className="errors">Precio no válido</p>}
               </div>

               <div className="fields">
                  <label htmlFor="category" className="field-label"> category </label>
                  <select name="category" id="category" className="field-input"
                     {
                     ...register("category",
                        { required: true }
                     )
                     }
                  >
                     <option value="" selected disabled > Categorías</option>
                     <option value="cabello-dama">Cabello Dama</option>
                     <option value="cabello-caballero">Cabello Caballero</option>
                     <option value="barba">Barba</option>
                     <option value="faciales">Faciales</option>
                     <option value="combos">Combos</option>
                  </select>
                  {errors.category?.type === 'required' && <p className="errors"> Categoría no válida</p>}
               </div>

               <div className="form-actions">
                  <button
                     className="btn btn-new-service"
                     type="submit">Registrar</button>
                  <Link to='/admin' className="btn btn-cancel">Cancelar</Link>
               </div>
            </form>
         </section>
      </LayoutAdmin>
   )
}

export default NewService;
