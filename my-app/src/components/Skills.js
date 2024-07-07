import React from 'react';
import htmlIcon from '../assets/images/html-icon.png';
import cssIcon from '../assets/images/css-icon.png';
import reactIcon from '../assets/images/react-icon.png';
import NodejsIcon from '../assets/images/nodejs-icon.png';
import expressIcon from '../assets/images/express-icon.png';
import mongoIcon from '../assets/images/mongo-icon.png';
import jsIcon from '../assets/images/js-icon.png';
import sqlIcon from '../assets/images/sql-icon.png';

import girlImage from '../assets/images/mypic11.jpg';

const SkillsSection = () => {
  return (
    <section id='skills'>
    <div className="skills-section mt-0 mb-0" style={{backgroundColor:'#c5deef'}}>
      <h2 className='mb-0 pt-2'><span className='text-primary fw-bold display-2'>My Skills</span></h2>
      <div className="skills-content">
        <div className="skills-grid">
          <div className="skill-item html">
            <img src={htmlIcon} alt="HTML" />
            <span>HTML</span>
          </div>
          <div className="skill-item css">
            <img src={cssIcon} alt="CSS" />
            <span>CSS</span>
          </div>
          <div className="skill-item app-dev">
            <img src={jsIcon} alt="javascript" />
            <span>JavaScript</span>
          </div>
          <div className="skill-item ios">
            <img src={NodejsIcon} alt="Nodejs" />
            <span>Nodejs</span>
          </div>
          </div>

          <div className="skills-grid ms-3">
          <div className="skill-item ios">
            <img src={expressIcon} alt="Express" />
            <span>ExpressJs</span>
          </div>
          <div className="skill-item react">
            <img src={reactIcon} alt="React JS" />
            <span>ReactJS</span>
          </div>
          <div className="skill-item app-dev">
            <img src={sqlIcon} alt="sql" />
            <span>SQL</span>
          </div>
          <div className="skill-item html">
            <img src={mongoIcon} alt="mongo" />
            <span>MongoDB</span>
          </div>
        </div>
        <div className="girl-image">
          <img src={girlImage} alt="Girl" />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center black_container">
      <div className="  text-white display-5">Interested working with me? 
      </div>
      <div className="px-5 ms-5">
      <a className="navbar-brand text-warning bg-orange ms-auto rounded cust_btn p-3 " href='#' >
          <button className="btn text-white py-3"><span className='py-3 px-3'>Contact Now</span></button>
        </a>
      </div>
      </div>
     
     
    </div>
    </section>
  );
};

export default SkillsSection;
