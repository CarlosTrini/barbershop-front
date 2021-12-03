import React from 'react';

import '../styles/layouts/about.scss';

const About = () => {
   return (
      <section className="sections container">
         <h2 className="sections-title">Quienes somos?</h2>
         <div className="about-details">
            <p>
               Somos un grupo de personas que compartimos una misma pasión: El arte de la barbería. Nos encanta que nuestros clientes salen siendo una persona completamente diferente a la que entró. 
               Saben que pueden tener un servicio de calidad con nosotros
            </p>
            <p>
               Nos dedicamos a esto desde hace más de 15 años, y hemos tenido la oportunidad de asistir a convenciones, eventos y cursos en los cuales siempre nuestro objetivo es el mismo: Aprender a dar un excelente servicio.
            </p>
            <p>
               Es cierto que en principio esto comenzó como una barbería, pero actualmente también nos dedicamos a ofrecer sesiones de tratamientos para la piel o cuidados del cabello en general. Obviamente las damas también son bienvenidas.
            </p>
         </div>
      </section>
   )
}

export default About;