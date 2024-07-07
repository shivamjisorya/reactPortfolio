

import React from 'react';
import staticImg from '../assets/images/picture.png' ;

const AboutMe = () => {
  return (
    <section className="about-me about-section-container pt-0">
        <div className="black_container"></div>
      <div className="container ">
        <div className="content ">
          <div className="image-container">
            <img src={staticImg} alt="Profile" className="profile-image" />
          </div>
          <div className="text-container">
            <h2>I'm Shivam, a Passionate Full Stack Developer with Hands-on Experience.</h2>
            <p>
              Hello! I’m Shivam, a Full Stack Developer from Gurugram, India. With over 6 months of hands-on experience at Manthan IT Solutions and a fruitful internship at VSIT Education, I specialize in building dynamic and responsive web applications using the MERN stack. I love coding and continuously learning to create impactful web solutions. 
            </p>
            <div className="stats">
              <div className="stat">
                <span className="number">10+</span>
                <span className="label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="number">5+</span>
                <span className="label">Happy Clients</span>
              </div>
            </div>
            <div className="buttons">
              <button className="contact-button cust_btn">Contact Me</button>
              <button className="portfolio-button cust_btn  ">Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

