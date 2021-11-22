import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import adminActions from '../../redux/admin/adminActions';

import LayoutAdmin from '../../components/admin/LayoutAdmin';

import '../../styles/layouts/editService.scss';

const EditService = () => {

   // id service in params
   const id = useParams().id;

   // admin reducer
   const dispatch = useDispatch();
   const { loading, updService } = useSelector(state => state.adminReducer);
   const { _id, service, price, category } = updService;

   // hook form
   let { register, handleSubmit, formState: { errors }, setValue } = useForm({
      mode: 'onChange',
      defaultValues: {
         "service": service,
         "price": price,
         "category": category,
         "id": _id
      }
   });


   const handleUpdateService = (data) => {
      dispatch(adminActions.updateServiceAction(data));
   }

   useEffect(() => {
      const getService = () => dispatch(adminActions.getServiceAction(id));
      getService();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [id]);

   return (
      <LayoutAdmin>
         <form onSubmit={handleSubmit(handleUpdateService)}
            className="form-service"
         >
            <h2 className="form-title edit-service">
               {
                  loading ? 'Buscando servicio...' : 'Editar servicio'
               }
            </h2>

            {/* INPUT SERVICE  */}

            <div className="fields">
               <label htmlFor="service" className="field-label">Nombre del servicio:</label>
               <input type="text"
                  className="field-input"
                  id="service"
                  onLoad={setValue('service', service)}
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
                  onLoad={setValue('price', price)}
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
                  onLoad={setValue('category', category)}

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
                  onClick={setValue('id', _id)}
                  type="submit">Editar</button>
               <Link to='/admin' className="btn btn-cancel">Cancelar</Link>
            </div>
         </form>
      </LayoutAdmin>
   )
}

export default EditService;