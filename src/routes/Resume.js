import React from 'react'
import Navbar from '../components/Navbar'
import ResumeViewer from '../components/ResumeViewer';
import { Footer } from '../components/Footer';

export const Resume = () => {
  return (
    <div>
     <Navbar/>
     <ResumeViewer/>
     <Footer/>
   </div>
  )
}
