import React, { useState } from 'react'
import './Navbar.css'
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [activeLink, setActiveLink] = useState('home')
  return (
    <div className='w-full bg-[#030713] text-white top-0 sticky z-10'>
        <div className='flex justify-between items-center lg:text-center lg:px-15 md:mx-7 py-5 border-b-1 border-[#e13e0f]'>
            <div className='flex items-center text-center space-x-0.5 px-15 md:px-0'>
                <p className='text-[25px] font-bold w-10 h-10 rounded-full bg-[#e13e0f]'>N</p>
                <p className='text-[22px] font-bold text-[#e13e0f]'>iloy.dev</p>
            </div>
            <nav className='hidden md:block'>
                <ul className='flex space-x-8 lg:space-x-12'>
                    <li onClick={() => setActiveLink('home')} className={activeLink === 'home' ? 'active' : ''}><a href='#home'>Home</a></li>
                    <li onClick={() => setActiveLink('about')} className={activeLink === 'about' ? 'active' : ''}><a href='#about'>About</a></li>
                    <li onClick={() => setActiveLink('skill')} className={activeLink === 'skill' ? 'active' : ''}><a href='#skill'>Skill</a></li>
                    <li onClick={() => setActiveLink('service')} className={activeLink === 'service' ? 'active' : ''}><a href='#service'>Service</a></li>
                    <li onClick={() => setActiveLink('project')} className={activeLink === 'project' ? 'active' : ''}><a href='#project'>Project</a></li>
                </ul>
            </nav>
            {
                menu &&
                <nav className='w-[100%] absolute mt-[18rem] h-[260px] z-10'>
                    <ul className='mobile-menu flex flex-col absolute w-full h-[240px] mt-[1.5rem] bg-gray-800/80'>
                        <li onClick={() => {setActiveLink('home'), setMenu(false)}} className={activeLink === 'home' ? 'menu' : ''}><a href='#home'>Home</a></li>
                        <li onClick={() => {setActiveLink('about'), setMenu(false)}} className={activeLink === 'about' ? 'menu' : ''}><a href='#about'>About</a></li>
                        <li onClick={() => {setActiveLink('skill'), setMenu(false)}} className={activeLink === 'skill' ? 'menu' : ''}><a href='#skill'>Skill</a></li>
                        <li onClick={() => {setActiveLink('service'), setMenu(false)}} className={activeLink === 'service' ? 'menu' : ''}><a href='#service'>Service</a></li>
                        <li onClick={() => {setActiveLink('project'), setMenu(false)}} className={activeLink === 'project' ? 'menu' : ''}><a href='#project'>Project</a></li>
                    </ul>
                </nav>
            }
            <div className='hidden md:block'>
               <a href="#contact" className='px-4 py-1.5 rounded-[25px] font-medium' style={{
                 background: 'linear-gradient(135deg, #e13e0f, #e04503, #fa5f05)'
               }}>Contact Me</a>
            </div>
            <div className='md:hidden px-15'>
                <button className='text-2xl cursor-pointer' onClick={() => setMenu(!menu)}>
                    {
                        menu ? <FiX /> : <FiMenu /> 
                    }
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar

