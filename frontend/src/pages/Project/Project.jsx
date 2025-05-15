import React, { useState } from 'react'
import { projects } from '../../assets/assets'
import { FaCode } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  const [defualtProject, setDefualt] = useState(3)
  const [data, setData] = useState('')
  console.log(data);
  
  
  return (
    <div className='bg-[rgb(3,7,19)] text-white py-20'>
      <div>
        <h1 className='text-center text-[45px] font-bold text-[#e13e0f] mb-10'>My Work</h1>
        <p className='text-center mb-15'>Welcome to my development portfolio! Explore a collection of project showcasing my expertise in full-stack development.</p>
        <div className='grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 justify-items-start'>
          {
            projects.slice(0, defualtProject).map((project, index) => (
              <div key={index} className='project-card w-[90%] mx-auto h-auto bg-[#101828] rounded-[10px] overflow-hidden hover:border'>
                <img className='w-full h-[250px]' src={project.image} alt="" />
                <div className='card-text px-4'>
                  <div className='mt-4 flex flex-wrap gap-1.5'>
                    {
                      project.demo.map((tech, index) => (
                        <span key={index} className='bg-[#1d2b55] px-1.5 py-0.5 rounded-[25px] text-[12px]'>{tech}</span>
                      ))
                    }
                  </div>
                  <p className='pt-3 text-[18px] font-bold pb-2'>{project.name}</p>
                  <p>{project.description}</p>
                  <div className='flex space-x-8 pt-4 mb-3 text-[14px]'>
                    <button className='flex space-x-1 items-center bg-green-600 px-2 py-1 rounded-[10px]'>
                      <span>Live Link</span> 
                      <FaExternalLinkAlt /> 
                    </button>
                    <button className='flex space-x-1 items-center bg-blue-700 px-2 py-1 rounded-[10px]'> 
                      <span>Source Code</span> 
                      <FaCode className='text-[20px] font-bold' /> 
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        {
          projects.length > 3 && 
          <button className='flex mx-auto px-4 py-2 bg-[#e13e0f] hover:border rounded-[10px] mt-20'>View More Projects</button>
        }
      </div>
    </div>
  )
}

export default Project

