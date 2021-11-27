import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';
import adminActions from '../../redux/admin/adminActions';

import '../../styles/layouts/reservationsTable.scss';
import checkIcon from '../../images/check.svg';
import { alertOptions } from '../../helper/alertHelper';

const RowsReservations = ({ reservation }) => {
   const { _id, idclient, price, nameservice, category, date, hour } = reservation;

   const navigate = useNavigate();

   // admin reducer 
   const dispatch = useDispatch();
   const { delReservation } = useSelector(state => state.adminReducer);


   const handleComplete = (idReservation) => {

      const response = alertOptions(
         'Reservación atendida',
         'Esto eliminará la reservación. Esta acción no se puede deshacer',
         'warning',
         'La reservación será eliminada',
         'Reservación atendida'
      );

      response
         .then(
            res => res && dispatch(adminActions.deleteReservationAction(idReservation))
         )
         .catch(err => console.error(err))
   }


   useEffect(() => {
      if (delReservation) {
         dispatch(adminActions.resetAction('delReservation', false));
         navigate('/admin/');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [delReservation])


   return (
      <tr>
         <td className='id-field'>{_id}</td>
         <td className='id-field'>{idclient}</td>
         <td>{nameservice}</td>
         <td>${price}</td>
         <td>{category}</td>
         <td>{date.slice(0, 10)}</td>
         <td>{hour}</td>
         <td className="actions-table">
            <button className="btn-none" title="delete service"
               onClick={() => handleComplete(_id)} >
               <img src={checkIcon} alt="delete icon" className="icon-action complete-action" />
            </button>
         </td>
      </tr>
   )
}

export default RowsReservations;