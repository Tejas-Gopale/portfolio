import React from 'react'
import Navbar from '../components/Navbar'
import HeroImages from '../components/HeroImage'
import { Footer } from '../components/Footer'
import {Work} from "../components/Work"
const Home = () => {
  return (
   <div>
     <Navbar/>
     <HeroImages/>
     <Work/>
     <Footer/>
   </div>
  )
}

export default Home