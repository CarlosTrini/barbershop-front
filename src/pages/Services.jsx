import React, { useState } from 'react';

import '../styles/layouts/services.scss';

import Layout from '../components/Layout';
import MenuCategory from '../components/MenuCategory';
import CardsContainer from '../components/CardsContainer';

const Services = () => {

   const [categorySelected, setCategorySelected] = useState('todos');
   const handleCategory = select => setCategorySelected(select);

   return (
      <Layout>
         <main className="services">
               <MenuCategory handleCategory={handleCategory} />
               <CardsContainer  categorySelected={categorySelected}/>
         </main>
      </Layout>
   )
}

export default Services;
