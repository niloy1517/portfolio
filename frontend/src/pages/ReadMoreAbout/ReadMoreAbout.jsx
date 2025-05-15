import React from 'react'
import './ReadMoreAbout.css'
import { assets } from '../../assets/assets'
import { FaCode } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";




const ReadMoreAbout = () => {
  return (
    <div className='min-h-screen bg-[rgb(3,7,19)] pb-40 text-white'>
      <div className='pt-20'>
        <div className='flex flex-col lg:flex-row justify-center items-center'>
          <div className='flex-1/4 flex justify-center mb-10 md:mb-0'>
            <img className='w-[90%]' src={assets.about_pic} alt="" />
          </div>
          <div className='flex flex-col gap-10 flex-1/2'>
            <div className='bg-[#101828] border mx-4 md:mx-10 border-blue-500 px-4 md:px-6 py-4 rounded-[7px]'>
              <div className='flex space-x-2 items-center text-[18px] md:text-[25px] font-medium pb-4 text-blue-500'>
                <FaCode />
                <h1>Frontend Development Journey</h1>
              </div>
              <p className='frontend-text'>I was always curious about the web, and my interest grew as I started building websites using <span> HTML, CSS</span>, and <span>JavaScript</span>. With time, I explored <span>React + Vite</span>, which helped me create faster and more dynamic applications. Frontend development became more than just a skill — it became my passion.</p>
            </div>
            <div className='bg-[#101828] border mx-4 md:mx-10 border-green-500 px-4 md:px-6 py-4 rounded-[7px]'>
              <div className='flex space-x-1 items-center text-[18px] md:text-[25px] font-medium pb-4 text-green-500'>
                <FaDatabase />
                <h1>Backend Development Journey</h1>
              </div>
              <p className='backend-text'>My curiosity to understand how websites work behind the scenes led me to backend development. I started with <span>Node.js</span> and <span>Express.js</span>, building <span>RESTful APIs</span> and connecting databases using <span>MongoDB</span> and <span>Firebase</span>. Over time, I learned how to handle authentication, manage server logic, and ensure application performance and security. Backend development gave me a deeper understanding of how full-stack systems truly work.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col mx-6 md:px-15 mt-20 overflow-hidden'>
          <div className='flex space-x-2 items-center text-purple-500 font-medium mb-10 md:mb-10'>
            <FaGraduationCap className='text-[35px]' />
            <h1 className='text-[35px]'>Education</h1>
          </div>
          <div className='flex flex-col lg:flex-row lg:justify-center gap-10'>
            <div className='flex'>
              <div className='border-l-3 flex flex-col justify-between'>
                <div className='w-4 h-4 bg-blue-500 rounded-full ml-[-9px]'></div>
                <div className='w-4 h-4 bg-blue-500 rounded-full ml-[-9px]'></div>
                <div className='w-4 h-4 bg-blue-500 rounded-full ml-[-9px]'></div>
              </div>
              <div className='px-4 py-2 flex flex-col gap-2'>
                <h1>Diploma in Engineering (Ongoing)</h1>
                <p>Institute: Habiganj Polytechnic Institute</p>
                <p>Department: Computer Science and Technology</p>
                <p>Status: Final Year</p>
                <p>Focus Areas: Web Development, Programming, Database Management</p>
              </div>
            </div>
            <div className='flex'>
              <div className='border-l-3 flex flex-col justify-between'>
                <div className='w-4 h-4 bg-green-500 rounded-full ml-[-9px]'></div>
                <div className='w-4 h-4 bg-green-500 rounded-full ml-[-9px]'></div>
                <div className='w-4 h-4 bg-green-500 rounded-full ml-[-9px]'></div>
              </div>
              <div className='px-4 py-2 flex flex-col gap-3'>
                <h1>Secondary School Certificate (SSC) – 2021</h1>
                <p>Institute: Habiganj Technical School & College</p>
                <p>Group: Science / Technical</p>
                <p>Achievements: Built a strong foundation in mathematics and logical thinking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadMoreAbout