import React from 'react';

import {useSelector} from 'react-redux';

import '../../styles/layouts/account.scss';

const Header = () => {

   const {user} = useSelector(state => state.authReducer);

   return (
      <header className="header-account">
            <h2 className="account-welcome">Bienvenido <span>{user}!</span></h2>
      </header>
   )  
}

export default Header;