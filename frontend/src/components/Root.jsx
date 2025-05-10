import React from 'react'
import Home from '../pages/Home/Home'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import About from '../pages/About/About'
import Service from '../pages/Service/Service'
import Contact from '../pages/Contact/Contact'
import Project from '../pages/Project/Project'
import Skill from '../pages/Skill/Skill'
import WorkWithMeSection from '../pages/WorkWithMeSection/WorkWithMeSection'

const Root = () => {
  return (
    <div>
        <Navbar />
        <section id='home'>
          <Home />
        </section>

        <section id='about'>
          <About />
        </section>

        <section id='skill'>
          <Skill />
        </section>

        {/* <section id='service'>
          <Service />
        </section> */}

        <section id='project'>
          <Project />
        </section> 

        <section>
          <WorkWithMeSection />
        </section>
        
        {/* <section id='contact'>
          <Contact />
        </section> */}
        <Footer />
    </div>
  )
}

export default Root