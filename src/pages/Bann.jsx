import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/layouts/bann.scss';

const Bann = () => {
   return (
      <section className="bann-container">
         <div className="bann-details">
            <h2 className="bann-title">Barber<span>Shop</span> </h2>
            <div className="bann-links">

            <Link to="/services" className="btn btn-bann-services">Sección de servicios</Link>
            <Link to="/register" className="btn btn-bann-register">Registrate y haz tu primera cita!</Link>
            </div>
         </div>
      </section>
   )
}

export default Bann;
