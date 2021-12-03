import React from 'react';

import Header from '../components/Header';
import Layout from '../components/Layout';
import About from './About';
import Bann from './Bann';
import Jobs from './Jobs';

const Home = () => {
   return (
      <Layout >
         <Header />
         <About />
         <Jobs />
         <Bann />
      </Layout>
   )
}
export default Home;
