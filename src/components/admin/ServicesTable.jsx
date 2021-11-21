import React, { useEffect } from 'react';

import RowsTable from './RowsTable';
import { alertTimer } from '../../helper/alertHelper';

import adminActions from '../../redux/admin/adminActions';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/layouts/servicesTable.scss';

const ServicesTable = () => {
      
   const dispatch = useDispatch();
   const {services, loading, delService } = useSelector(state => state.adminReducer);


   useEffect(() => {
      if (delService) {
         alertTimer('success', 'Servicio eliminado');
         dispatch(adminActions.resetAction('delService', false));
         dispatch(adminActions.getServicesAction());
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [delService]);

   return (
      <main className="services-table-container container">
         <div className="table-container">
               {loading && <h3 className="del-service">Eliminando servicio...</h3>}
            <table className="table">
               <caption>
                  Servicios actuales
                  {services.length < 1 && <p className="table-alert">No hay servicios</p>}
                  <p className="caption-msg">Desliza izq. o der. para ver la tabla</p>
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
                     services.length > 0 && services.map((s) => 
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
