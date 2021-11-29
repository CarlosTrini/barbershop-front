import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

import LayoutAdmin from '../../components/admin/LayoutAdmin'
import ReservationsTable from '../../components/admin/ReservationsTable';

import {useDispatch, useSelector} from 'react-redux';
import adminActions from '../../redux/admin/adminActions';

import '../../styles/layouts/reservations.scss';

const Reservations = () => {

   //admin reducer
   const dispatch = useDispatch();
   const {reservations} = useSelector(state => state.adminReducer);

   const [dateSelected, setDateSelected] = useState('');

   // form hook
   const { register, handleSubmit, formState: { errors } } = useForm();

   const handleDate = (data) => {
      const {reservation} = data;
      setDateSelected(reservation);
      dispatch(adminActions.getReservationDateAction(reservation));
   }

   useEffect(() => {
      
   }, [reservations])

   return (
      <LayoutAdmin>
         <section>
            <form className='form-container' onSubmit={handleSubmit(handleDate)}>
               <h2 className='form-title'>
                  Seleccione una fecha
               </h2>
               <div className='fields'>
                  <label htmlFor='reservation' className='field-label'>Fecha reservaciones:</label>
                  <input type='date' className='field-input' id='reservation' name='reservation'
                     
                     {
                     ...register('reservation',
                        {
                           required: true
                        }
                     )
                     }
                  />
                  {errors.reservation?.type === 'required' && <p className="errors"> la fecha de reservación es requerida</p>}
               </div>
               <div>
                  <input type='submit' value='Buscar' className=' btn-reservations btn' />
               </div>
            </form>
            {
               reservations.length < 1 
               ? <h3 className='alert-msg'>No hay reservaciones para mostrar</h3>
               :<ReservationsTable dateSelected = {dateSelected}/>
            }

                
         </section>
      </LayoutAdmin>
   )
}

export default Reservations
