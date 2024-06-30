import React from 'react';
import checkmark from '../assets/checkmark.png'
import arrow from '../assets/arrow.png'

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Robotic Software Enginner</h2>
            <div className="article-container">
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>ROS1 & ROS2</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Python</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>C++</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Deep Learning</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Docker</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>GCP (Cloud Function)</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Development</h2>
            <div className="article-container">
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>TensorFlow</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Keras</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>GCP (Cloud Function)</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href='#projects'} />
    </section>
  );
}

export default Experience;
