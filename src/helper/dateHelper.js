const getCurrentDate = () => {
   const date = new Date();

   const year = date.getFullYear();
   const month = checkDate(date.getMonth() + 1);
   const day = checkDate(date.getDate());
   const today = `${year}-${month}-${day}`;
   
   return {
      year,
      month,
      day,
      today
   };
}

const checkDate = (date) => {
   return date < 10 ? 0 + String(date) : date;
}

export default getCurrentDate;
