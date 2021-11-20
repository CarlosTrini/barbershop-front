import React from 'react';

import '../styles/layouts/cardService.scss';

const CardService = ({ service }) => {
   return (

      <div className="card">
         <header className="card-header">
            <h3>{service.service}</h3>
         </header>
         <div className="card-details">
            <p>Precio: $ <span>{service.precio}</span></p>
            <p>Categoría: <span>{service.category}</span></p>
         </div>
         <footer className="card-footer">
            <button className="btn btn-add-service">agregar</button>
         </footer>
      </div>
   )
}

export default CardService;
