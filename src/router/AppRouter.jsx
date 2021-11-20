import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Services from '../pages/Services';
import NotFound404 from '../pages/NotFound404';
import AccountUser from '../pages/AccountUser';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/admin' element={<Admin />}   />
        <Route exact path='/services' element={<Services />}   />
        <Route exact path='/account' element={<AccountUser />}   />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
