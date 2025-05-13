import React from 'react'
import { FaLink } from "react-icons/fa6";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#101828] text-white'>
      <div className='ml-6 md:ml-0 md:flex md:flex-row md:justify-around lg:mx-10'>
        <div className='pt-10'>
          <div className='flex items-center text-center space-x-0.5'>
            <p className='text-[25px] font-bold w-10 h-10 rounded-full bg-[#e13e0f]'>N</p>
            <p className='text-[22px] font-bold text-[#e13e0f]'>iloy.dev</p>
          </div>
          <div className='flex items-center space-x-1 pt-4 md:pt-6'>
            <IoMdMail className='text-[20px]' />
            <p>niloygope111@gamil.com</p>
          </div>
          <div className='flex items-center space-x-1 pt-4'>
            <FaPhoneAlt className='text-[18px]' />
            <p>+880 1736088083</p>
          </div>
        </div>
        <div className='mt-10'>
          <div className='flex items-center space-x-1 text-[18px]'>
            <FaLink />
            <p>Quick Links</p>
          </div>
          <ul className='flex gap-4 pt-4 md:pt-6'>
            <li className='hover:font-medium hover:text-[#e13e0f]'><a href="#home">Home</a></li>
            <li className='hover:font-medium hover:text-[#e13e0f]'><a href="#about">About</a></li>
            <li className='hover:font-medium hover:text-[#e13e0f]'><a href="#skill">Skill</a></li>
            <li className='hover:font-medium hover:text-[#e13e0f]'><a href="#service">Service</a></li>
            <li className='hover:font-medium hover:text-[#e13e0f]'><a href="#project">Project</a></li>
          </ul>
        </div>
        <div className='mt-10'>
          <p className='text-[18px]'>Connect With Me</p>
          <div className='flex items-center space-x-3 md:space-x-4 pt-4 md:pt-6'>
            <a href="#"><TiSocialFacebook className='text-[35px] hover:text-[#e13e0f] cursor-pointer' /></a>
            <a href=""><TiSocialLinkedin className='text-[38px] hover:text-[#e13e0f] cursor-pointer' /></a>
            <a href=""><TiSocialTwitter className='text-[35px] hover:text-[#e13e0f] cursor-pointer' /></a>
            <a href=""><FaGithub className='text-[25px] hover:text-[#e13e0f] cursor-pointer' /></a>
          </div>
        </div>
      </div>
      <p className='text-center border-t mt-15 py-6'>© 2025 Niloy Gope. All Rights Reserved.</p>
    </div>
  )
}

export default Footer