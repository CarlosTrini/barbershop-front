import Swal from 'sweetalert2';

export const alertTimer = (icon = 'success', title) => {
   return Swal.fire({
      position: 'top-end',
      icon,
      title,
      showConfirmButton: false,
      timer: 3000
    })
}

export const alertBasic = (title, text, icon = 'success') => {
   return Swal.fire({
      title,
      text,
      icon
    })
}

export const alertOptions = (title, text, icon = 'warning' , titleConfirm, textConfirm) => {
   return Swal.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonColor: '#030027',
      cancelButtonColor: '#700909',
      confirmButtonText: 'Entendido'
    }).then((result) => {
      if (result.isConfirmed) {
          Swal.fire(
            titleConfirm,
            textConfirm,
            'success'
          )
          return true;
      }
    })
}



// +++ ICONS
// success
// error	
// Try me!
// warning	
// Try me!
// info	
// Try me!
// question
