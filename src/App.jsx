import { useState } from 'react';
import  {BrowserRouter,Routes,Route} from 'react-router-dom';


import './App.css';
import Navbar from './components/navbar/Navabar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Skills from './components/skills/Skills.jsx';
import Projects from './components/projects/Projects.jsx';
import Footer from './components/footer/Footer.jsx'; 
import Contact from './components/contact/Contact.jsx';
import Title from './components/title/Title.jsx';


function App() {
  

  return (
      <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Title title="Projects"/>
      <Projects/>
      <Contact/>
      <Footer/>

     
      </>

    
  )
}

export default App
