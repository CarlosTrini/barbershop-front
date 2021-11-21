import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import ServicesTable from '../components/admin/ServicesTable';

import {useSelector, useDispatch} from 'react-redux';
import adminActions from '../redux/admin/adminActions';

import '../styles/layouts/Admin.scss';

const Admin = () => {

   const dispatch = useDispatch();
   
   
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
         </header>
         <ServicesTable />
         
      </Layout>
   )
}

export default Admin;
