// import { useState } from 'react'
// import reactLogo from './assets/logo.svg'
// import viteLogo from '/vite.svg'

import './App.css'
// import Computer from './component/Computer';
import Profie from './component/Profile';
import Header from './component/Header';
import Instroductions from './component/Instroduction';
import Experience from './component/Experiancene';
import Skills from './component/Skill';
import Project from './component/Project';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';

// import Scene3D from "./component/Scene3D";

function App() {
 

  return (
    <>
  <div className='fixed top-0  left-0 w-full shadow-md py-4 px-6 md:px-12 flex items-center justify-between z-50'>
    <Header/>
  </div>
  <div className=' '>
  <Profie />
  </div>

  <Instroductions />
  {/* <Computer /> */}
  {/* <Experience /> */}
  <Skills />
  <Project />
  <Testimonial />
  <Contact />


   
   
    </>
  )
}

export default App
