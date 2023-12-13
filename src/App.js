import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Header/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx'
import Home from './Pages/home/Home.jsx';
import Hero from './Pages/one/Hero.jsx';
import Service from './Pages/services/Service.jsx'
import Programs from './Pages/programs/programs.jsx';
import Workshops from './Pages/workshops/workshops.jsx';
import About from './Pages/about/About.jsx';
import Contact from './Pages/contact/Contact.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route index element={<Home />} />
          <Route path="one" element={<Hero />} />
          <Route path ="services" element={<Service/>} />
          <Route path="programs" element={<Programs />} />
          <Route path="workshops" element={<Workshops />} /> 
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer/>
      

    </>
  );
};

export default App;

