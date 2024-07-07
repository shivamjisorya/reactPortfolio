import React, { useState } from 'react';
import project2 from '../assets/images/collage2.png';
import project1 from '../assets/images/collage1.png';

const Portfolio = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const projects = [
    {
      title: "Website Designed for Group of Hotels",
      description: "Elevate your hotel's online presence with our bespoke website, merging luxury and functionality seamlessly. Tailored for discerning travelers, it promises an intuitive, elegant experience from reservation to exploration of amenities.",
      imgSrc: project1,
      details: {
        type: "Website",
        languages: "HTML, CSS, JS",
        platform: "Front-End",
        country: "India",
        url: "https://shivamjisorya.github.io/frontend-unchi-dhara/"
      }
    },
    {
      title: "Furniture Store Website",
      description: "SJ Furniture: A responsive website with a comprehensive admin dashboard, facilitating efficient inventory management, customer engagement, and seamless operations..",
      imgSrc: project2,
      details: {
        type: "Website",
        languages: " HTML, CSS, JS , NodeJs , Express , MongoDB ",
        platform: "Full-Stack",
        country: "India",
        url: "https://github.com/shivamjisorya/furnitureStore.git"
      }
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="latest-projects-section">
        <h2 className="display-5">Latest Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <img src={project.imgSrc} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="view-project-button" onClick={() => openModal(project)}>View Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalVisible && (
       <div className="modal">
       <div className="modal-content">
         <span className="close px-close" onClick={closeModal}>&times;</span>
         <div className="modal-content-inner">
           <img src={selectedProject.imgSrc} alt={selectedProject.title} className="modal-image" />
           <div className="modal-details">
             <h2>{selectedProject.title}</h2>
             <p className='text-end text-warning'>By- SHIVAM JISORYA</p>
             <p  className='mt-5'><strong>Description:</strong> {selectedProject.description}</p>
             <p><strong>Type:</strong> {selectedProject.details.type}</p>
             <p><strong>Languages:</strong> {selectedProject.details.languages}</p>
             <p><strong>Platform:</strong> {selectedProject.details.platform}</p>
             <p><strong>Country:</strong> {selectedProject.details.country}</p>
             <p><strong>Live URL:</strong> <a href={selectedProject.details.url} target="_blank" rel="noopener noreferrer">{selectedProject.details.url}</a></p>
           </div>
         </div>
       </div>
     </div>
     
      )}
    </section>
  );
};

export default Portfolio;
