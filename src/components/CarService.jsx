import React, { useEffect, useState } from 'react'
import FormReservation from './FormReservation';

import { useDispatch, useSelector } from 'react-redux';
import clientActions from '../redux/client/clientActions';

import { alertTimer } from '../helper/alertHelper';

const CarService = ({ serviceCar }) => {
   const { _id, category, price, service, qty } = serviceCar;

   // states
   const [activeModal, setActiveModal] = useState(false);
   const [dateHour, setDateHour] = useState({ date: '', hour: '' });
   const [totalPay, setTotalPay] = useState(qty * price)

   // auth y client reducer
   const dispatch = useDispatch();
   const { login } = useSelector(state => state.authReducer);


   const handleIncrement = () => dispatch(clientActions.addItemCarAction(serviceCar));
   const handleDecrement = () => dispatch(clientActions.delItemCarAction(serviceCar));

   const handleReservation = () => {
      login
         ? setActiveModal(true)
         : alertTimer('info', 'Necesita iniciar sesión para poder realizar una cita');
   };

   const makeReservation = () => {
      setActiveModal(false);
      const reservation = {
         _id,
         service,
         date: dateHour.date,
         hour: dateHour.hour,
         price,
         category,
         total: totalPay,
         qty
      }

      console.log('entra')
      dispatch(clientActions.makeReservationAction(reservation));
   }

   useEffect(() => {
      (dateHour.date.trim() !== '' && dateHour.hour.trim() !== '') && makeReservation();

      setTotalPay(qty * price)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dateHour, qty])

   return (
      <div className="card-service">
         <h3 className="card-service-title">{service}</h3>
         <p className="card-service-details">Precio: $<span> {price}</span></p>
         <p className="card-service-details">Categoría: <span>{category}</span></p>
         <p className="card-service-details">Cantidad: <span>{qty}</span></p>
         <p className="card-service-details total-service"
         >Total: <span>{totalPay}</span></p>
         <div className="service-actions">
            <button className="btn btn-reservation"
               onClick={handleReservation}
            >Reservar</button>

            <button className="btn btn-increment-service"
               onClick={handleIncrement}
            >Add</button>

            <button className="btn btn-decrement-service"
               onClick={handleDecrement}
            >Remove</button>
         </div>
         {
            activeModal &&
            <FormReservation setDateHour={setDateHour} setActiveModal={setActiveModal} />
         }
      </div>
   )
}

export default CarService
