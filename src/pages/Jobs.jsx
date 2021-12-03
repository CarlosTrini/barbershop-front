import React from 'react';

import '../styles/layouts/jobs.scss';
import job1 from '../images/image1.png';
import job2 from '../images/image2.jpg';
import job3 from '../images/image3.jpg';

const Jobs = () => {
   return (
      <main className="container">
         <section className="sections">
            <h2 className="sections-title">Encontraras...</h2>
            <div className="jobs-container">
               <article className="job-details">
                  <figure className="job-image">
                     <img src={job1} alt="Ilustracion uno" />
                  </figure>
                  <div className="job-body">
                     <h3 className="job-title">Elegancia de lo clásico</h3>
                     <p className="job-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis magni nihil mollitia ex ratione fugiat dolor cum necessitatibus sequi? Inventore omnis ipsa ea labore saepe cumque impedit possimus velit doloribus id? Cupiditate alias, officia temporibus totam ea enim, voluptatibus, magnam aspernatur exercitationem esse error iusto nostrum aperiam omnis voluptates.
                     </p>
                  </div>
               </article>
               <article className="job-details">
                  <figure className="job-image image-right">
                     <img src={job2} alt="Ilustracion uno" />
                  </figure>
                  <div className="job-body body-left">
                     <h3 className="job-title">Personal preparado</h3>
                     <p className="job-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis magni nihil mollitia ex ratione fugiat dolor cum necessitatibus sequi? Inventore omnis ipsa ea labore saepe cumque impedit possimus velit doloribus id? Cupiditate alias, officia temporibus totam ea enim, voluptatibus, magnam aspernatur exercitationem esse error iusto nostrum aperiam omnis voluptates.
                     </p>
                  </div>
               </article>
               <article className="job-details">
                  <figure className="job-image">
                     <img src={job3} alt="Ilustracion uno" />
                  </figure>
                  <div className="job-body">
                     <h3 className="job-title">Diferentes servicios</h3>
                     <p className="job-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis magni nihil mollitia ex ratione fugiat dolor cum necessitatibus sequi? Inventore omnis ipsa ea labore saepe cumque impedit possimus velit doloribus id? Cupiditate alias, officia temporibus totam ea enim, voluptatibus, magnam aspernatur exercitationem esse error iusto nostrum aperiam omnis voluptates.
                     </p>
                  </div>
               </article>
            </div>
         </section>
      </main>
   )
}

export default Jobs;
