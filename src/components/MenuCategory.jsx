import React from 'react';

import '../styles/layouts/menuCategory.scss';

const MenuCategory = ({ handleCategory }) => {

   const handleSelect = category => handleCategory(category);
   

   return (
      <header className="categories-header">
         <div className="menu-category container">
            <h2 className="menu-category-title">Selecciona una categoría</h2>
            <nav className="categories">
               <ul>
                  <li>
                     <button className="btn btn-category"
                        onClick={() => handleSelect('todos')}
                     >Todos</button>
                  </li>
                  <li>
                     <button className="btn btn-category"
                        onClick={() => handleSelect('cabello-dama')}
                     >Cabello dama</button>
                  </li>
                  <li>
                     <button className="btn btn-category"
                        onClick={() => handleSelect('cabello-caballero')}
                     >Cabello caballero</button>
                  </li>
                  <li>
                     <button className="btn btn-category"
                        onClick={() => handleSelect('barba')}
                     >Barba</button>
                  </li>
                  <li>
                     <button className="btn btn-category"
                        onClick={() => handleSelect('faciales')}
                     >Faciales</button>
                  </li>
                  <li>
                     <button className="btn btn-category"
                        onClick={ () => handleSelect('combos') }
                     >Combos</button>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   )
}

export default MenuCategory;