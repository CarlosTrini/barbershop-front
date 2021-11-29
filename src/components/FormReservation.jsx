import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Modal from './Modal';

import '../styles/layouts/formReservation.scss';
import getCurrentDate from '../helper/dateHelper';

const FormReservation = ({ setDateHour, setActiveModal }) => {

   const [currentDay, setCurrentDay] = useState(getCurrentDate())

   const { register, formState: { errors }, handleSubmit } = useForm();

   const handleReservation = (data) => {
      setDateHour({
         date: data.date, 
         hour: data.hour
      });
   }

   const handleModalClose = () => setActiveModal(false);

   return (
      <Modal>
         <div className="close-form">
            <button className="btn btn-close-form" title="close modal form date and hour"
               onClick={handleModalClose}
            >&times;</button>
         </div>
         
            <form className="form-reservation" onSubmit={handleSubmit(handleReservation)}>
               <div className="fields">
                  <label htmlFor="date" className="field-label">Eliga una fecha:</label>
                  <input type="date" name="date" id="date" className="field-input"
                     min={currentDay.today}
                     {
                     ...register(
                        'date',
                        {
                           required: true,
                           validate: value => {
                              const weekDay = new Date(value).getUTCDay();
                              const dateArr = value.split('-');
                              const year = Number(dateArr[0]);
                              const month = Number(dateArr[1]);
                              const day = Number(dateArr[2]);
                              if (Number(weekDay) === 0) return false;
                              if (day < Number(currentDay.day) && month > Number(currentDay.month)) return true;
                              if (month < Number(currentDay.month) && year < Number(currentDay.year)) return false;
                              if (day < Number(currentDay.day) && month === Number(currentDay.month)) return false;
                           }
                        }
                     )
                     }
                  />
                  {errors.date?.type === 'required' && <p className="errors"> La fecha es requerida</p>}
                  {errors.date?.type === 'validate' && <p className="errors">La fecha no anterior a hoy, ni domingos</p>}
               </div>
               <div className="fields">
                  <label htmlFor="hour" className="field-label">Eliga una hora:</label>
                  <input type="time" name="hour" id="hour" className="field-input" min='13'
                     {
                     ...register(
                        'hour',
                        {
                           required: true,
                           validate: value => {
                              const hourSelected = Number(value.split(':')[0]);
                              return hourSelected < 20 && hourSelected >= 9 ? true : false;
                           }
                        }
                     )
                     }
                  />
                  {errors.hour?.type === 'required' && <p className="errors"> La hora es requerida</p>}
                  {errors.hour?.type === 'validate' && <p className="errors">Horario de 09:00 - 20:00 hrs</p>}
               </div>
               <div>
                  <input type="submit" value="Listo" className="btn btn-reservation-submit" />
               </div>
            </form>
      </Modal>
   )
}

export default FormReservation;
