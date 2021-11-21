import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import Home from '../pages/Home';
// import Admin from '../pages/Admin';
// import Services from '../pages/Services';
//import NotFound404 from '../pages/NotFound404';
// import AccountUser from '../pages/AccountUser';
import PrivateRoutes from './private/PrivateAdmin';
import PrivateClient from './private/PrivateClient';
import PublicRoutes from './PublicRoutes';

import { useSelector } from 'react-redux';

function AppRouter() {

  const { role, login } = useSelector(state => state.authReducer);
  return (
    <Routes>

      {/* PUBLIC ROUTES */}
      {/*
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} /> 
        <Route exact path='/services' element={<Services />}   />
        <Route path='*' element={<NotFound404 />} />
      */}

      {/* PRIVATE ROUTES */}
      {/* <Route exact path='/admin' element={<Admin />}   /> */}
      {/* <Route exact path='/account' element={<AccountUser />}   /> */}


      <Route path='/*' element={<PublicRoutes />} />
      <Route path='/admin/*'
        element={role === 'admin' && login ? <PrivateRoutes /> : <Navigate to='/' />}
      />
      <Route path='/account/*'
        element={role === 'client' && login ? <PrivateClient /> : <Navigate to='/' />}
      />

    </Routes>
  );
}

export default AppRouter;
