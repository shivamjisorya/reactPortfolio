import React from 'react';

const Header = () => {
  return (
    <header className="bg-light py-3">
      <nav className="navbar navbar-expand-lg navbar-light container"  style={{ backgroundColor: '#fef4e8' }}>
        {/* Logo */}
        <a className="navbar-brand text-warning me-auto  logo_font" href="#home"><h2>SHIVAM</h2></a>
        
        {/* Toggle Button */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav custom_font">
            <li className="nav-item active">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li>
            <a className="navbar-brand text-warning bg-orange ms-auto rounded cust_btn px-2 " href="#contact">
          <button className="btn  text-white  px-3">Contact Now</button>
        </a>
            </li>
          </ul>
        </div>
        
      </nav>
    </header>
  );
}

export default Header;
