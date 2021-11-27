import React, { useEffect } from 'react';

import RowsReservations from './RowsReservations';

import {useSelector} from 'react-redux';

const ReservationsTable = ({dateSelected}) => {
   // admin reducer
   const {reservations} = useSelector(state => state.adminReducer);



   useEffect(() => {

   }, [reservations])

   return (
      <main className="services-table-container container">
         <div className="table-container">
            <table className="table">
               <caption >
                  Reservaciones para la fecha:  
                  <span className='caption-date'> {dateSelected}</span>
                  <p className="caption-msg">Desliza izq. o der. para ver la tabla</p>
               </caption>
               <thead>
                  <tr>
                     <th>Id</th>
                     <th>Id Cliente</th>
                     <th>Servicio</th>
                     <th>Precio</th>
                     <th>Categoría</th>
                     <th>Fecha</th>
                     <th>Hora</th>
                     <th>Atendida</th>
                  </tr>
               </thead>
               
               <tbody>
                   {
                     reservations.length > 0 && reservations.map((reservation) => 
                        <RowsReservations key={reservation._id} reservation={reservation}/>
                     )
                  } 
                  
               </tbody>
            </table>
         </div>
      </main>
   )
}

export default ReservationsTable;