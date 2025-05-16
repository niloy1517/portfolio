import React from 'react'
import './Hero.css'
import { MdOutlineFileDownload } from "react-icons/md";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { assets } from '../../assets/assets';

const Hero = () => {
  return (
    <div className='py-15 bg-[rgb(3,7,19)] text-white'>
        <div className='flex flex-col lg:flex-row-reverse md:justify-between md:items-center'>
            {/* Hero Image */}
            <div className='mx-auto mt-8 lg:flex-1/2 md:absolute'>
                <img 
                    className='w-[300px] md:w-[360px] lg:w-[490px] md:ml-0 h-auto opacity-10 md:opacity-15 lg:opacity-20' 
                    src={assets.hero} alt="" 
                />
            </div>

            <div className='flex px-6 items-center md:mt-30 lg:mt-10 md:flex-1/2'>
                {/* Social Icons */}
                <div className='hidden md:block flex-col items-center space-y-10 md:mr-10 lg:mr-15 mt-16 md:mt-40 lg:mt-30'>
                    <TiSocialFacebook className='social-icon text-[35px] cursor-pointer'/>
                    <TiSocialLinkedin className='social-icon text-[37px] cursor-pointer'/>
                    <TiSocialTwitter className='social-icon text-[30px] cursor-pointer'/>
                    <AiOutlineInstagram className='social-icon text-[28px] cursor-pointer'/>
                </div>
                
                {/* Hero Text */}
                <div className='pl-4 md:pt-15 lg:mr-90'>
                    <h1 className='md:pt-50 lg:pt-40 font-bold text-[30px] md:text-[35px] font-pri'>
                        Hi, I'm <span className='text-[#03ABEE]'>Niloy Gope.</span>
                    </h1>
                    <p className='mt-4 font-bold text-[22px] md:text-[30px] md:text-[#03ABEE] font-pri'>
                        A Passionate Full-Stack Web Developer.
                    </p>
                    {/* Mid & Large Device Introduce Text */}
                    <p className='hidden md:block pt-10 leading-8 font-sec'>
                        I am passionate about transforming innovative ideas into high-performing web applications. With expertise in the MERN Stack, I specialize in building fast, responsive, and interactive digital experiences. My focus is on writing clean, efficient, and scalable code to create seamless user experiences.
                    </p>

                    {/* Mobile Device Introduce Text */}
                    <p className='md:hidden pt-10 leading-7'>
                        I build fast and interactive web apps using the MERN Stack. I focus on clean, scalable code to turn ideas into seamless user experiences.
                    </p>
                    {/* Download CV Button */}
                    <button className='mt-15 lg:mt-20 px-6 py-2 border-2 border-[#03ABEE] rounded-[7px] flex items-center space-x-1.5 cursor-pointer hover:bg-[#03ABEE] hover:border-white'>
                        <span>Download CV</span>
                        <MdOutlineFileDownload className='text-[22px]' />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero