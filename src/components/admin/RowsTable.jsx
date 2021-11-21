import React, { useRef } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import adminActions from '../../redux/admin/adminActions';

import '../../styles/layouts/servicesTable.scss';
import editIcon from '../../images/edit.svg';
import trashIcon from '../../images/trash.svg';
import { alertOptions } from '../../helper/alertHelper';

const RowsTable = ({ s }) => {
   const { _id, service, price, category } = s;

   // admin reducer
   const dispatch = useDispatch();

   // ref del button 
   const serviceDel = useRef();

   const handleDelete = () => {
      //return promise
      const response = alertOptions('Eliminar servicio', 'Se eliminará este servicio. No se puede deshacer esta acción', 'warning', 'El servicio será eliminado', 'Esta acción ya no se puede deshacer');

      response
         .then(res => {
            if (!res) return false;
            const id = serviceDel.current.id;
            dispatch(adminActions.delServiceAction(id));
         });
   }

   return (
      <tr>
         <td>{_id}</td>
         <td>{service}</td>
         <td>${price}</td>
         <td>{category}</td>
         <td className="actions-table">
            <Link to='edit' title="edit service">
               <img src={editIcon} alt="edit icon" className="icon-action edit-action" />
            </Link>
            <button to='delete' className="btn-none" id={_id} title="delete service" onClick={handleDelete} ref={serviceDel}>
               <img src={trashIcon} alt="delete icon" className="icon-action del-action" />
            </button>
         </td>
      </tr>
   )
}

export default RowsTable;