import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Admin from '../../pages/admin/Admin';
import NotFound404 from '../../pages/NotFound404';
import NewService from '../../pages/admin/NewService';
import EditService from '../../pages/admin/EditService';
import Reservations from '../../pages/admin/Reservations';

const PrivateAdmin = () => {
   // LAS RUTAS DE "account" Y "admin" son privadas junto con sus subrutas
   return (
      <Routes>
         <Route exact path='/' element={<Admin />} /> {/* /admin  */}
         <Route path='new-service' element={<NewService />} /> {/* /admin/new-service  */}
         <Route path='edit-service/:id' element={<EditService /> } /> {/* /admin/new-service/id  */}
         <Route path='reservations' element={<Reservations /> } />
         <Route path='*' element={<NotFound404 />} />
      </Routes>
   )
}

export default PrivateAdmin;
