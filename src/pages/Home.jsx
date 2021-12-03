import React from 'react';

import Header from '../components/Header';
import Layout from '../components/Layout';
import About from './About';

const Home = () => {
   return (
      <Layout >
         <Header />
         <About />
      </Layout>
   )
}
export default Home;
