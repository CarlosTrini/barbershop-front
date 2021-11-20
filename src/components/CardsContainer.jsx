import React, { useEffect } from 'react';

import '../styles/layouts/cardsContainer.scss';

import CardService from './CardService';

const CardsContainer = ({ categorySelected }) => {

   useEffect(() => {
      // la idea es que en cuanto cambie la categoria, se realize una petición al servidor y este responda... posteriormente y los servicios sean enviados como props o actualizados en el store de redux y tomarlos
      console.log(categorySelected);
   }, [categorySelected])

   const services = [
      { id: 1, service: 'corte caballero militar', precio: '120.50', category: 'cortes caballero'},
      { id: 21, service: 'corte caballero moikano', precio: '120.50' , category: 'cortes caballero'},
      { id: 2, service: 'corte dama puntas', precio: '170.50' , category: 'cortes dama'},
      { id: 3, service: 'corte niño', precio: '70' , category: 'cortes niño'},
      { id: 4, service: 'corte niña', precio: '70' , category: 'cortes niña'},
      { id: 5, service: 'corte barba', precio: '70' , category: 'barba'},
      { id: 6, service: 'delineado barba ', precio: '70' , category: 'barba'},
   ];

   return (
      <section className="container">
         <header>
            <h2 className="category-title">{categorySelected}</h2>
         </header>

         <div className="category-card-container">
            {
               !services.length < 1 && services.map(s => <CardService key={s.id} service={s} />)
            }
         </div>

      </section>
   )
}

export default CardsContainer;