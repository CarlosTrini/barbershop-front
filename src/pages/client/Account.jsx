import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import clientActions from '../../redux/client/clientActions';

import Layout from '../../components/Layout'
import CardService from '../../components/client/CardService';
import Header from '../../components/client/Header';

import '../../styles/layouts/account.scss';

const Account = () => {

   const { id } = useSelector(state => state.authReducer);
   const { reservationsClient, loading } = useSelector(state => state.clientReducer);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(clientActions.getReservationsAction(id));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);


   return (
      <Layout>
         <main className="account">
            <Header />
            <section className="container account-services">

               <h2 className="account-section-title">

                  {
                     reservationsClient.length > 0
                        ? 'Tus reservaciones'
                        : 'No tienes reservaciones'
                  }
               </h2>
               <div className="account-services-cards">

                  {
                     loading && <h3> 'Buscando tus reservaciones...'</h3>
                  }

                  {
                     reservationsClient.length > 0
                     && reservationsClient.map(reservation =>
                        <CardService key={reservation._id} reservation={reservation} />
                     )
                  }

               </div>
            </section>

         </main>
      </Layout>
   )
}

export default Account;