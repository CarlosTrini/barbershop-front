import React from 'react';

import '../styles/layouts/header.scss';



const Header = () => {
   return (
      <header className="header marginTop">
         <div className="header-container container">
            <section className="hero-details">
               <h1 className="hero-text">Barbería en la CDMX</h1>
               <h2 className="hero-text">Barber<span>Shop</span> </h2>
               <p className="hero-bann">
                  Visitanos dentro de la ciudad de México. Deja el cuidado de tu barba o cabello en las manos de nuestros expertos y nuestros productos de calidad. No te arrepentiras. Vive la experiencia de una barbería tradicional 
               </p>
            </section>
         </div>
      </ header>
   )
}

export default Header;
