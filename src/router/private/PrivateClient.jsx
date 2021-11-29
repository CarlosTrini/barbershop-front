import React from 'react';
import { Routes, Route } from 'react-router';
import Account from '../../pages/client/Account';
import NotFound404 from '../../pages/NotFound404';

const PrivateClient = () => {
   console.log('entraste a una ruta privada del cliente');
   return (
      <div>
         <Routes>
            <Route path="/" element={<Account />} />    {/* /account */}
            <Route path="*" element={<NotFound404 />} />
         </Routes>
      </div>
   )
}

export default PrivateClient;
