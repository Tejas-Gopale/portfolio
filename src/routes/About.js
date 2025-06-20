import React from 'react';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import { HeroImg2 } from '../components/HeroImg2';
import { AboutContant } from '../components/AboutContant';

const About = () => {
  return (
    <div>  
      <Navbar />
      <HeroImg2 heading="ABOUT." text="Im friendly Java Backend Developer and Little Bit knowledge of Frint End Development React js."/>
      <AboutContant/>
      <Footer />
    </div>
  )
}

export default About;