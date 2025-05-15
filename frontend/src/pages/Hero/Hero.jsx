import React from 'react'
import './Hero.css'
import { MdOutlineFileDownload } from "react-icons/md";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { assets } from '../../assets/assets';

const Hero = () => {
  return (
    <div className='min-h-screen pb-20 bg-[rgb(3,7,19)] text-white'>
        <div className='flex flex-col lg:flex-row-reverse md:justify-between md:items-center'>
            <div className='mx-auto mt-6 lg:flex-1/2 md:absolute'>
                <img className='w-[300px] md:w-[450px] lg:w-[490px] md:ml-0 h-auto opacity-10 md:opacity-15 lg:opacity-20' src={assets.hero} alt="" />
            </div>
            <div className='flex px-6 items-center md:mt-10 md:flex-1/2'>
                <div className='hidden md:block flex-col items-center space-y-10 md:mr-10 lg:mr-15 mt-16'>
                    <TiSocialFacebook className='text-[35px] cursor-pointer hover:text-[#e13e0f]'/>
                    <TiSocialLinkedin className='text-[37px] cursor-pointer hover:text-[#e13e0f]'/>
                    <TiSocialTwitter className='text-[30px] cursor-pointer hover:text-[#e13e0f]'/>
                    <AiOutlineInstagram className='text-[28px] cursor-pointer hover:text-[#e13e0f]'/>
                </div>
                <div className='pl-4 md:pt-15 lg:mr-90'>
                    <h1 className='md:pt-40 font-bold text-[30px] md:text-[35px]'>Hi, I'm <span className='text-[#e13e0f]'>Niloy Gope.</span></h1>
                    <p className='mt-4 font-bold text-[25px] md:text-[30px] md:text-[#e13e0f]'>A Passionate Full-Stack Web Developer.</p>
                    <p className='hidden md:block pt-10 text-[18px] md:leading-8'>I am passionate about transforming innovative ideas into high-performing web applications. With expertise in the MERN Stack, I specialize in building fast, responsive, and interactive digital experiences. My focus is on writing clean, efficient, and scalable code to create seamless user experiences.</p>

                    <p className='md:hidden pt-10 text-[18px] md:leading-8'>I build fast and interactive web apps using the MERN Stack. I focus on clean, scalable code to turn ideas into seamless user experiences.</p>
                    <button className='mt-15 md:mt-30 px-6 py-2 border-2 border-[#e13e0f] rounded-[7px] flex items-center space-x-1.5 cursor-pointer hover:bg-[#e13e0f] hover:border-white'><span>Download CV</span><MdOutlineFileDownload className='text-[22px]' /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero