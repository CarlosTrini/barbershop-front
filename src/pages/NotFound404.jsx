import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/layouts/notFound.scss';
import icon from '../images/barber-icon.png';

const NotFound404 = () => {
   return (
      <div className="notfound-container">
         <h2 className="notfound-text">Opps! NO pudimos encontrar esta página</h2>
         <figure>
            <img src={icon} alt="icon" />
         </figure>
         <Link to="/" className="btn btn-notfound">Regresar</Link>
      </div>
   )
}

export default NotFound404;