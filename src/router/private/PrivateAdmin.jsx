import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Admin from '../../pages/Admin';
import NotFound404 from '../../pages/NotFound404';
import NewService from '../../components/admin/NewService';

const PrivateAdmin = () => {
   // LAS RUTAS DE "account" Y "admin" son privadas junto con sus subrutas
   return (
      <Routes>
         <Route exact path='/' element={<Admin />} /> {/* /admin  */}
         <Route path='new-service' element={<NewService />} /> {/* /admin/new-service  */}
         <Route path='*' element={<NotFound404 />} />
      </Routes>
   )
}

export default PrivateAdmin;
