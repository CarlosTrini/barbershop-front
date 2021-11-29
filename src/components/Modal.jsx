import React from 'react';

import '../styles/layouts/modal.scss'

const Modal = ({ children }) => {
   return (
      <div className="modal-container">
         <div className="modal-details">

            {children}

         </div>
      </div>
   )
}

export default Modal;