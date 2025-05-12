import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx'
import Hero from '../../pages/Hero/Hero.jsx'
import About from '../../pages/About/About.jsx'
import Skill from '../../pages/Skill/Skill.jsx'
import Project from '../../pages/Project/Project.jsx';
import WorkWithMeSection from '../../pages/WorkWithMeSection/WorkWithMeSection.jsx'
import Footer from '../Footer/Footer.jsx'

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
        <Navbar />
        <section id='home'> <Hero /> </section>
        <section id='about'> <About /> </section>
        <section id='skill'> <Skill /> </section>
        <section id='project'> <Project /> </section> 
        <section> <WorkWithMeSection /> </section>
        <Footer />
    </div>
  )
}

export default MainLayout

