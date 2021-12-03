import React from 'react';
import { Link } from 'react-router-dom';

import icon from '../images/barber-icon.png';
import facebookIcon from '../images/facebook.svg';
import instagramIcon from '../images/instagram.svg';
import youtubeIcon from '../images/youtube.svg';
import tiktokIcon from '../images/tiktok.svg';

import '../styles/layouts/footer.scss';

const Footer = () => {
   return (
      <footer className="footer">
     
         <div className="footer-links">
            <ul>
               <li>
                  <Link to="">sucursales</Link>
               </li>
               <li>
                  <Link to="">Clientes</Link>
               </li>
               <li>
                  <Link to="">Noticias</Link>
               </li>
               <li>
                  <Link to="">Dias especiales</Link>
               </li>
               <li>
                  <Link to="">Descuentos</Link>
               </li>
               <li>
                  <Link to="">Ubicación</Link>
               </li>
               <li>
                  <Link to="">Reservaciones especiales</Link>
               </li>
            </ul>
         </div>
         <div>
            <figure className="footer-icon">
               <img src={icon} alt="barberShop icon" title="barbershop icon" />
            </figure>
         </div>
         <div className="footer-redes">
            <h3 className="redes-title">Nuestra redes sociales</h3>
            <figure className="redes-icons">
               <Link to="">
                  <img src={facebookIcon} alt="facebook" />
               </Link>
               <Link to="">
                  <img src={youtubeIcon} alt="youtube" />
               </Link>
               <Link to="">
                  <img src={instagramIcon} alt="instagram" />
               </Link>
               <Link to="">
                  <img src={tiktokIcon} alt="tiktok" />
               </Link>
            </figure>
         </div>
      </footer>
   )
}

export default Footer;