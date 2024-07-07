import React from 'react';


const Services = () => {
  return (
    <section id='services' className="services-section">
      <div className="container">
        <h2 className="services-title "><span className='text-white display-4 fw-bold'>MY SERVICES</span></h2>
        <div className="services-grid">
          <div className="service-box web-design d-flex justify-content-between align-items-center">
            <div className="service-icon border border-3">📞</div>
            <div className="">
            <h3>Web Design</h3>
            <p>Creating visually appealing and user-friendly websites tailored to your brand and business needs. Specializing in responsive designs that ensure your site looks great on any device.</p>
          </div>
          </div>
          <div className="service-box development d-flex justify-content align-items-center">
            <div className="service-icon border border-3">💻</div>
            <div className="">
            <h3>Web Development</h3>
            <p>Developing robust and scalable websites using the latest technologies. Focused on creating high-performance, secure, and SEO-friendly websites that drive business growth.</p>
          </div>
          </div>
          <div className="service-box seo-marketing d-flex justify-content align-items-center">
            <div className="service-icon border border-3">⚠️</div>
            <div className="">
            <h3>SEO Marketing</h3>
            <p>Optimizing your website to improve its visibility on search engines. Providing comprehensive SEO strategies, including keyword research, on-page optimization, and link building to drive organic traffic and improve search rankings.</p>
          </div>
          </div>
          <div className="service-box web-design d-flex justify-content align-items-center">
            <div className="service-icon border border-3">🏠</div>
            <div className="">
            <h3>Mobile App Development</h3>
            <p>Designing and developing mobile applications for both Android and iOS platforms. Offering end-to-end services from concept to deployment, ensuring a seamless and engaging user experience.</p>
          </div>
          </div>
          <div className="service-box development d-flex justify-content align-items-center">
            <div className="service-icon border border-3">📏</div>
            <div className="">
            <h3>Full Stack Development</h3>
            <p>Offering comprehensive full stack development services, from front-end user interfaces to back-end server logic. Utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js) to build dynamic and interactive web applications.</p>
          </div>
          </div>
          <div className="service-box seo-marketing d-flex justify-content align-items-center">
            <div className="service-icon border border-3">🌐</div>
            <div className="">
            <h3>E-commerce Development</h3>
            <p>Building custom e-commerce solutions tailored to your business needs. Implementing features such as product catalogs, shopping carts, payment gateways, and inventory management to create a seamless online shopping experience.</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
