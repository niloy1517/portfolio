import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [activeLink, setActiveLink] = useState('home')

    // Assuming 768px is the breakpoint for desktop
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth >= 768) {
                setMenu(false)
            }

            window.addEventListener('resize', handleResize)

            return () => {
                window.removeEventListener('resize', handleResize)
            }
        }
    }, [])
  return (
    <div className='w-full bg-[#030713] text-white top-0 sticky z-20'>
        <div className='flex justify-around md:justify-between items-center lg:text-center lg:px-15 md:mx-7 py-5 border-b-1 border-[#03ABEE]'>
            <div className='flex items-center text-center space-x-0.5'>
                <p className='text-[25px] font-bold w-10 h-10 rounded-full bg-[#03ABEE]'>N</p>
                <p className='text-[22px] font-bold text-[#03ABEE]'>iloy.dev</p>
            </div>
            <nav className='hidden md:block'>
                <ul className='flex space-x-8 lg:space-x-12'>
                    <li onClick={() => setActiveLink('home')} className={activeLink === 'home' ? 'active' : ''}><Link to='/#home'>Home</Link></li>
                    <li onClick={() => setActiveLink('about')} className={activeLink === 'about' ? 'active' : ''}><Link to='/#about'>About</Link></li>
                    <li onClick={() => setActiveLink('skill')} className={activeLink === 'skill' ? 'active' : ''}><Link to='/#skill'>Skill</Link></li>
                    {/* <li onClick={() => setActiveLink('service')} className={activeLink === 'service' ? 'active' : ''}><Link to='/#service'>Service</Link></li> */}
                    <li onClick={() => setActiveLink('project')} className={activeLink === 'project' ? 'active' : ''}><Link to='/#project'>Project</Link></li>
                </ul>
            </nav>
            {
                menu &&
                <nav className='w-[100%] absolute mt-[18rem] h-[260px] z-10'>
                    <ul className='mobile-menu flex flex-col absolute w-full h-[240px] mt-[1.7rem] bg-gray-800/80'>
                        <li onClick={() => {setActiveLink('home'), setMenu(false)}} className={activeLink === 'home' ? 'menu' : ''}><Link to='/#home'>Home</Link></li>
                        <li onClick={() => {setActiveLink('about'), setMenu(false)}} className={activeLink === 'about' ? 'menu' : ''}><Link to='/#about'>About</Link></li>
                        <li onClick={() => {setActiveLink('skill'), setMenu(false)}} className={activeLink === 'skill' ? 'menu' : ''}><Link to='/#skill'>Skill</Link></li>
                        {/* <li onClick={() => {setActiveLink('service'), setMenu(false)}} className={activeLink === 'service' ? 'menu' : ''}><Link to='/#service'>Service</Link></li> */}
                        <li onClick={() => {setActiveLink('project'), setMenu(false)}} className={activeLink === 'project' ? 'menu' : ''}><Link to='/#project'>Project</Link></li>
                    </ul>
                </nav>
            }
            <div className='hidden md:block'>
               <Link to="/contact" className='px-4 py-1.5 rounded-[25px] font-medium hover:border' style={{
                 background: 'linear-gradient(135deg, #0558f3, #03ABEE)'
               }}>Contact Me</Link>
            </div>
            <div className='md:hidden'>
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

