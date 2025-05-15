import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='bg-[rgb(3,7,19)] text-white py-20'>
        <div className='w-full h-auto'>
          <h1 className='text-center text-[45px] font-bold text-[#e13e0f] mb-25'>About Me</h1>
            <div className='w-full h-full lg:flex lg:justify-around items-center'>
                <div className='w-[300px] h-[362px] lg:h-auto rounded-[7px] border-6 border-[#e13e0f] mx-auto lg:ml-20 lg:flex-1/7'>
                  <img className='w-[96%] m-auto h-auto py-2' src={assets.picture} alt="" />
                </div>
                <div className='mt-16 mx-4 lg:flex-1/2 lg:ml-20'>
                  <p className='about-text text-[14px] sm:text-[16px] lg:w-[80%] p-2.5 sm:p-4 z-10 leading-6 md:leading-8 lg:py-8 bg-[#101828] border-l-10 border-[#e13e0f] rounded-[3px]'>I am <span>Niloy Gope</span>, a passionate Full-Stack Developer specializing in the <span>MERN Stack</span>. I love transforming ideas into scalable, high-performing web applications that provide seamless user experiences. My expertise includes <span>React.js</span> for frontend, <span>Node.js & Express.js</span> for backend, and <span>MongoDB</span> for database management. Currently, I am completing my Diploma in Engineering in Computer Science and Technology, where I have gained a strong foundation in data structures, algorithms, and software development methodologies.</p>
                </div>     
            </div>
            <div className='flex text-[14px] space-x-8 md:space-y-14 justify-center mt-15'>
                <button className='lg:ml-70 w-32 h-12 px-6 py-2 rounded-[7px] border-2 border-[#e13e0f] hover:bg-[#e13e0f] hover:border-white cursor-pointer'>
                  <Link to={'/readMore'}>Read More</Link>
                </button>
                <button className='w-32 h-12 px-6 py-2 rounded-[7px] border-2 border-[#e13e0f] hover:bg-[#e13e0f] hover:border-white cursor-pointer'>
                  <Link to={'/contact'}>Hire Me</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default About