import { useState } from 'react';
import  {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';
import Navbar from './components/navbar/Navabar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Skills from './components/skills/Skills.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  

  return (
      <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Footer/>
      </>

    
  )
}

export default App
