import React from 'react';
import { Routes, Route } from 'react-router';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Services from '../pages/Services';
import NotFound404 from '../pages/NotFound404';
import Car from '../pages/Car';


const PublicRoutes = () => {
   // LA RUTA DEL "home",  "services" Y "carrito" SON PÚBLICAS
   //EL carrito tiene que revisar que exista un login antes de poder realizar un cierre de cita
   return (
      <div>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path='login' element={<Login />} />
            <Route exact path='register' element={<Register />} />
            <Route exact path='services' element={<Services />} />
            <Route exact path='car' element={<Car />} />
            <Route path='*' element={<NotFound404 />} />
         </Routes>
      </div>
   )
}

export default PublicRoutes