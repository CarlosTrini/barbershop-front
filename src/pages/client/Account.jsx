import React from 'react'
import Header from '../../components/client/Header';

import Layout from  '../../components/Layout'

import '../../styles/layouts/account.scss';
const Account = () => {
   return (
      <Layout>
         <main className="account">
            <Header />

         </main>
      </Layout>
   )
}

export default Account;