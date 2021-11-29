import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import clientActions from '../redux/client/clientActions';

import CardService from './CardService';

import '../styles/layouts/cardsContainer.scss';

const CardsContainer = ({ categorySelected }) => {

   const [spinn, setSpinn] = useState(false);

   //client reducer
   const dispatch = useDispatch();
   const { services, loading } = useSelector(state => state.clientReducer);

   useEffect(() => {
      dispatch(
         categorySelected === 'todos'
            ? clientActions.getServicesAction()
            : clientActions.getServiceCategory(categorySelected)
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [categorySelected])

   return (
      <section className="container">
         <header>
            <h2 className="category-title">
               {
                    loading
                  ? 'Cargando servicios categoría...'
                  : categorySelected
               }
               
            </h2>
         </header>

         <div className="category-card-container">
            {
               services.length < 1 
               ? <h3 className='alert-msg'>No hay servicios de esta categoría</h3>
               :  services.map(s => <CardService key={s._id} service={s} />)
            }
         </div>

      </section>
   )
}

export default CardsContainer;