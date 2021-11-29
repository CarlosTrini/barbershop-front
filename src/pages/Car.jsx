import React from 'react';
import CarService from '../components/CarService';

import Layout from '../components/Layout';

import { useSelector, useDispatch } from 'react-redux';
import clientActions from '../redux/client/clientActions';

import '../styles/layouts/car.scss';
import carEmpty from '../images/empty-car.svg';



const Car = () => {

   // client reducer
   const dispatch = useDispatch();
   const { car } = useSelector(state => state.clientReducer);
   const handleDelCar = () => dispatch(clientActions.delCarAction());

   return (
      <Layout>
         <main className="car-page">
            <header className="container">
               <h2 className="car-msg">
                  {
                     car
                        ? 'Tus productos seleccionados!'
                        : 'Aún no hay productos en tu carrito'
                  }
               </h2>
               {
                  car && (<button className="btn btn-del-car"
                     onClick={handleDelCar}>
                     Vaciar carrito</button>)
               }
            </header>

            <section className="car-products container">

               {
                  car
                     ?
                     (
                        car.map(serviceCar =>
                           <CarService key={serviceCar._id} serviceCar={serviceCar} />
                        )
                     )
                     :
                     (
                        <figure className="empty-car-image">
                           <img src={carEmpty} alt="Empty car img" className="empty-image" />
                        </figure>
                     )
               }

            </section>

         </main>
      </Layout>
   )
}

export default Car
