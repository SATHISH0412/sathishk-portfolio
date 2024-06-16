import { useState } from 'react';
import  {BrowserRouter,Routes,Route} from 'react-router-dom';


import './App.css';
import Hero from './components/Hero/Hero.jsx';
import Title from './components/title/Title.jsx'
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills.jsx'


function App() {
  

  return (
      <>
      <Hero/>
      <Skills/>
      <Title title="projects"/>
      <Projects/>
     
      </>

    
  )
}

export default App
