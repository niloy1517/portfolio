import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='min-h-screen bg-[rgb(3,7,19)] text-white'>
        <div className='w-full h-auto flex flex-col lg:flex-row pt-30 lg:pt-60'>
          <h1 className='lg:hidden font-pri text-[40px] text-center font-bold pb-25'>
                About <span className='text-[#03ABEE]'> Me</span>
              </h1>
          {/* About Image Section */}
            <div className='flex-1/4 lg:ml-15'>
              <div className='image-box w-[70%] md:w-[50%] lg:w-full mx-auto '>
                <img className='w-[80%] h-full z-10 ml-10 rounded-[10px]' src={assets.picture} alt="about-image" />
              </div>
            </div>
          {/* About Text Section */}
            <div className='flex-1/2 mx-4 md:mx-10'>
              <h1 className='font-pri hidden lg:block text-[40px] font-bold pb-10'>
                About <span className='text-[#03ABEE]'> Me</span>
              </h1>
              <p className='about-text md:leading-8 mb-20 pt-25 lg:pt-0'>
                I am <span>Niloy Gope</span>, a passionate Full-Stack Developer specializing in the <span>MERN Stack</span>. I love transforming ideas into scalable, high-performing web applications that provide seamless user experiences. My expertise includes <span>React.js</span> for frontend, <span>Node.js & Express.js</span> for backend, and <span>MongoDB</span> for database management. Currently, I am completing my Diploma in Engineering in Computer Science and Technology, where I have gained a strong foundation in data structures, algorithms, and software development methodologies.
              </p>
              <div className='flex space-x-6 md:space-x-15 justify-center lg:justify-start'>
                <button className='w-35 h-11 rounded-[10px] border-2 border-[#03ABEE] hover:bg-[#03ABEE]'>
                  <Link to={'/readMore'}>Read More</Link>
                </button>
                <button className='w-35 h-11 rounded-[10px] border-2 border-[#03ABEE] hover:bg-[#03ABEE]'>
                  <Link to={'/contact'}>Hire Me</Link>
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About