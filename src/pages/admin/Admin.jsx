import React, { useEffect, useState } from 'react';
import LayoutAdmin from '../../components/admin/LayoutAdmin';
import ServicesTable from '../../components/admin/ServicesTable';

const Admin = () => {

   return (
      <LayoutAdmin>
         <ServicesTable />
      </LayoutAdmin>
   )
}

export default Admin;
