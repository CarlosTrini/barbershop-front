import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import icon from '../images/barber-icon.png';


const SpinnerAuth = ({title}) => {
   const { loading } = useSelector(state => state.authReducer); //REDUCER
   const [spinner, setSpinner] = useState(false);

   useEffect(() => {
      const spinn = loading ? true : false;
      setSpinner(spinn);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [loading])

   return (
      <div>
         <figure className={`form-icon ${ spinner && 'spinnerAnimation'}`}>
                  <img src={icon} alt="icon login " />
               </figure>
               
               <h2 className="form-title">
                  {spinner ? 'cargando' : title}
               </h2>
      </div>
   )
}

export default SpinnerAuth;
