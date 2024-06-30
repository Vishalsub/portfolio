import React from 'react';
import profile from '../assets/about-pic2.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profile} alt="Vishal Subramanian profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Vishal Subramanian</h1>
        <p className="section__text__p2">Robotic Software Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.open('./assets/resume-example.pdf')}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => window.location.href='#contact'}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img src= {linkedin} alt="My LinkedIn profile" className="icon" onClick={() => window.location.href='https://www.linkedin.com/in/vishalsubra/'} />
          <img src= {github} alt="My Github profile" className="icon" onClick={() => window.location.href='https://github.com/Vishalsub'} />
        </div>
      </div>
    </section>
  );
}

export default Profile;
