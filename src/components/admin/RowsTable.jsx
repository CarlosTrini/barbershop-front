import React from 'react';
import { Link } from 'react-router-dom';

const RowsTable = ({s}) => {
   const {_id, service, price, category} = s;

   return (
      <tr>
         <td>{_id}</td>
         <td>{service}</td>
         <td>${price}</td>
         <td>{category}</td>
         <td>
            <Link to='edit'>Edit</Link>
            <Link to='delete' >Delete</Link>
         </td>
      </tr>
   )
}

export default RowsTable;