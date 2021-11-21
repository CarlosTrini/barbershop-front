import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';

import { useDispatch } from 'react-redux';
import adminActions from '../../redux/admin/adminActions';

import iconAdmin from '../../images/admin-menu.svg';
import '../../styles/layouts/layoutAdmin.scss'; 

const LayoutAdmin = ({children}) => {

   const dispatch = useDispatch();

   const [toggle, setToggle] = useState(false);
   const handleToggle = () => setToggle(!toggle);


   useEffect(() => {
      const getServices = () => dispatch(adminActions.getServicesAction());
      getServices();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      <Layout>
         <header className="header-admin">
            <h2 className="admin-title">Administrador</h2>
            <h3 className="admin-title">Barber<span>Shop</span></h3>

            <button className="admin-hamburger" title="options admin" onClick={handleToggle}>
               <img src={iconAdmin} alt="icon options administrator" />
            </button>

            <nav className={`nav-admin ${toggle ? 'show' : 'hide'}-nav-admin`}>
               <ul>
                  <li>
                     <Link to="/admin" className="btn">Servicios</Link>
                  </li>
                  <li>
                     <Link to="/admin/new-service" className="btn">Nuevo servicio</Link>
                  </li>
                  <li>
                     <Link to="/admin/reservations" className="btn">Reservaciones</Link>
                  </li>
                  <li>
                     <Link to="/admin/clients" className="btn">Clientes</Link>
                  </li>
               </ul>
            </nav>
         </header>

         {children}


      </Layout>
   )
}

export default LayoutAdmin;