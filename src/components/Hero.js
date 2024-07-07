import React, { useState, useEffect } from 'react';
import shivamImage from '../assets/images/image2.jpg'

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [wordIndex, setWordIndex] = useState(0);

  const words = ["veloper", "signer"];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        if (text.length > 0) {
          setText(text.substring(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
          setSpeed(200);
        }
      } else {
        if (text.length < currentWord.length) {
          setText(currentWord.substring(0, text.length + 1));
        } else {
          setIsDeleting(true);
          setSpeed(200);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, speed, wordIndex]);

  return (
    <section id="home" className="hero-section " style={{ backgroundColor: '#fef4e8' }}>

      <div className="container text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <h2>👋, My Name is Shivam</h2>
            <h1 className="display-4 font-weight-bold">I'm a De{text}</h1>
            <p className="lead">Based in Gurugram, India.</p>
            <a href="#contact" className="btn btn-warning text-white mt-3">Let's Start</a>
          </div>
          <div className="col-md-6">
            <img src={shivamImage} alt="Krinky" className="my_image_custom" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
