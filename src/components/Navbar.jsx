import React, { useEffect, useState } from 'react';

import '../styles/layouts/navbar.scss';
import icon from '../images/barber-icon.png';
import iconUser from '../images/user-icon.png';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import authActions from '../redux/auth/authActions';

const Navbar = () => {

   //things about redux
   const dispatch = useDispatch();
   const { login, role, user } = useSelector(state => state.authReducer);
   const {car} = useSelector(state => state.clientReducer);

   const [toggle, setToggle] = useState(false);
   const [isAdmin, setIsAdmin] = useState(false);
   const [isLogin, setIsLogin] = useState(false);
   const [userName, setUserName] = useState('');
   const [path, setPath] = useState('/login');


   const handleToggle = () => setToggle(!toggle);

   const handleCloseSesion = () => dispatch(authActions.logOutAction());

   useEffect(() => {
      setIsAdmin(role === 'admin' ? true : false);
      setIsLogin(login);
      setUserName(user);
      setPath(login ? '/' : '/login');
   }, [login, role, user, car]);

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
                  {
                     isAdmin && <li> <Link to="/admin"> Panel admin</Link> </li>
                  }
                  {
                     !isAdmin && isLogin ?
                        <li> <Link to="/account"> mi cuenta</Link> </li>
                        : null
                  }
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
                     <Link to={path} className="btn btn-signout" onClick={handleCloseSesion}>
                        <img src={iconUser} alt="icon user" className="icon-user" />
                        {isLogin ? 'Cerrar' : 'LogIn'}
                        <p className="user-in">{userName}</p>
                     </Link>
                  </li>
               </ul>
            </div>

         </div>
      </nav>
   )
}

export default Navbar;
