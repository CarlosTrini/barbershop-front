import React from 'react';

import '../../styles/layouts/servicesTable.scss';

import { useSelector } from 'react-redux';
import RowsTable from './RowsTable';

const ServicesTable = () => {

   const {services} = useSelector(state => state.adminReducer);

   return (
      <main className="services-table-container container">
         <div className="table-container">
            <table className="table">
               <caption>
                  Servicios actuales
                  {services.length < 1 && <p className="table-alert">No hay servicios</p>}
               </caption>
               <thead>
                  <tr>
                     <th>Id</th>
                     <th>Servicio</th>
                     <th>Precio</th>
                     <th>Categoría</th>
                     <th>Acciones</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     services.length > 1 && services.map((s) => 
                        <RowsTable key={s._id} s={s}/>
                     )
                  }
               </tbody>
            </table>
         </div>
      </main>
   )
}

export default ServicesTable;
