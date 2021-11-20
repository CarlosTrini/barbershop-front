import React, { useState } from 'react';

import '../styles/layouts/navbar.scss';
import icon from '../images/barber-icon.png';
import iconUser from '../images/user-icon.png';

import { Link } from 'react-router-dom';


const Navbar = () => {

   const [toggle, setToggle] = useState(false);
   const [isAdmin, setIsAdmin] = useState(false);
   const [car, setCar] = useState(true);
   const [login, setLogin] = useState(false);

   const handleToggle = () => setToggle(!toggle);

   return (
      <nav className="navbar">
         <div className="container navbar-container">
            <figure className="navbar-icon">
               <img src={icon} alt="babershop icon" />
               <Link to="/">
                  <h2>Barber<span>Shop</span></h2>
               </Link>
            </figure>

            <div className=" menu-hamburger" onClick={handleToggle}>
               <span></span> <span></span>  <span></span>
            </div>

            <div className={`navbar-links ${!toggle ? 'hide' : 'show'}`}>
               <ul className="links">
                  <li>
                     <Link to="/"> home </Link>
                  </li>
                  <li>
                     <Link to="/services"> servicios</Link>
                  </li>
                  <li>
                     {
                        isAdmin
                           ? <Link to="/admin"> Panel admin</Link>
                           : <Link to="/account"> mi cuenta</Link>
                     }
                  </li>
                  {
                     !isAdmin
                     &&
                     <li>
                        <Link to="/car" className="car">
                           <span className={`${car && 'notification'}`}>carrito</span>
                        </Link>
                     </li>
                  }

                  <li>
                     <Link to="/login" className="btn btn-signout">
                        <img src={iconUser} alt="icon user" className="icon-user" />
                        {login ? 'Cerrar' : 'LogIn' }
                        <p className="user-in"></p>
                     </Link>
                  </li>
               </ul>
            </div>

         </div>
      </nav>
   )
}

export default Navbar;
