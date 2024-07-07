import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import './assets/styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 


function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <About />
            <Services />
            <Skills />
            <Portfolio />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default App;
