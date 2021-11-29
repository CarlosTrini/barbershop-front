import React from 'react';

import { useDispatch } from 'react-redux';
import clientActions from '../redux/client/clientActions';

import '../styles/layouts/cardService.scss';

const CardService = ({ service }) => {
   const dispatch = useDispatch();

   const handleAddCar = () => {
      dispatch(clientActions.addItemCarAction(service));
   }

   return (
      <div className="card">
         <header className="card-header">
            <h3>{service.service}</h3>
         </header>
         <div className="card-details">
            <p>Precio: $ <span>{service.price}</span></p>
            <p>Categoría: <span>{service.category}</span></p>
         </div>
         <footer className="card-footer">
            <button className="btn btn-add-service"
               onClick={handleAddCar}
            >agregar</button>
         </footer>
      </div>
   )
}

export default CardService;
