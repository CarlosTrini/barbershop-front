import React from 'react';

import { useDispatch } from 'react-redux';
import clientActions from '../../redux/client/clientActions';

const CardService = ({ reservation }) => {

   const { _id, category, date, hour, nameservice, price, quantity, totalPay, idclient } = reservation;

   const dispatch = useDispatch();


   const handleDelReservation = async() => {
      await dispatch(clientActions.delReservationAction(_id));
      await dispatch(clientActions.getReservationsAction(idclient))

   }

   return (
      <div className="account-card">
         <h3 className="account-card-title">
            {nameservice}
         </h3>
         <ul className="account-card-details">
            <li >Precio por servicio: <span>${price}</span></li>
            <li>Servicios totales: <span>{quantity}</span></li>
            <li>Total a pagar: <span>${totalPay}</span></li>
            <li>Día reservado: <span>{date.substring(0, 10)}</span></li>
            <li>Hora seleccionada: <span>{hour}</span></li>
            <li>Categoría: <span>{category}</span></li>
         </ul>

         <button className="btn btn-cancel" onClick={handleDelReservation}>Cancelar reservación</button>
      </div>
   )
}

export default CardService;
