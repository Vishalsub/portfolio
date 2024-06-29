import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My</p>
      <h1 className="title">Projects</h1>
      <div className="project-details-container">
        <div className="about-containers">
          <div className="project-container">
            <div className="details-container">
              <img src="./assets/robotics.png" alt="Experience icon" className="icon" />
              <h3>Mobile Robotics</h3>
              <p>Mobile robotics focuses on the development and control of robots that can move and navigate in various environments. These robots are equipped with sensors and actuators to perceive and interact with their surroundings. Mobile robotics finds applications in fields such as autonomous vehicles, drone navigation, warehouse automation, and exploration of hazardous environments.</p>
              <div className="btn-container">
                <button className="btn btn-color-1" onClick={() => window.open('https://github.com/Vishalsub/TARS-ROS2')}>
                  Check it out
                </button>
              </div>
            </div>
          </div>
          <div className="project-container">
            <div className="details-container">
              <img src="./assets/cloud.png" alt="Experience icon" className="icon" />
              <h3>Cloud Robotics</h3>
              <p>Cloud robotics involves integrating cloud computing technologies with robotic systems. It leverages the power of cloud-based services for tasks such as data storage, processing, and machine learning, enabling robots to offload computationally intensive operations and access vast amounts of information. This approach enhances the capabilities and scalability of robotic systems, allowing them to perform complex tasks and collaborate seamlessly across different locations.</p>
              <div className="btn-container">
                <button className="btn btn-color-1" onClick={() => window.open('https://github.com/Vishalsub/CloudRobotics')}>
                  Check it out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => window.location.href='#contact'} />
    </section>
  );
}

export default Projects;
