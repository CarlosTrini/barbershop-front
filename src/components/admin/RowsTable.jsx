import React from 'react';

import { Link } from 'react-router-dom';

import '../../styles/layouts/servicesTable.scss';
import editIcon from '../../images/edit.svg';
import trashIcon from '../../images/trash.svg';

const RowsTable = ({ s }) => {
   const { _id, service, price, category } = s;

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
            <button to='delete' className="btn-none" title="delete service">
               <img src={trashIcon} alt="delete icon" className="icon-action del-action" />
            </button>
         </td>
      </tr>
   )
}

export default RowsTable;