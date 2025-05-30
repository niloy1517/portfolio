import React from 'react'
import { GoArrowRight, GoArrowUp } from "react-icons/go";
import { Link } from 'react-router-dom';


const WorkWithMeSection = () => {
  return (
    <div className='bg-[rgb(3,7,19)] text-white py-20'>
        <div className='relative'>
            <p className='text-[55px] md:text-[80px] font-bold text-center opacity-20'>Let's Work <br />Together</p>
        </div>
        <div className='mt-[-11.5rem] md:mt-[-15.5rem] flex flex-col justify-center items-center text-center mx-auto'>
           <div className='flex items-center font-bold text-[20px] md:text-[28px] text-[#03ABEE]'>
            <GoArrowRight className='text-[32px] md:text-[40px]'/>
            <p>Work With Me</p>
           </div>
           <div className='text-[26px] md:text-[40px] font-bold mt-7'>
            <p>Have Any Projects On Minds! <br /> Feel Free To Contact Me.</p>
           </div>
           <button className='w-22 h-22 md:w-25 md:h-25 bg-[#03ABEE] font-bold rounded-full mt-20 hover:border'>
            <Link to={'/contact'}>Let's Talk With Me </Link> 
            </button>
        </div>
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className='w-10 h-10 flex justify-center items-center bg-[#03ABEE] font-extrabold text-[30px] mt-30 ml-[86%] md:ml-[94%] lg:ml-[95%] rounded-full'><GoArrowUp/></button>
    </div>
  )
}

export default WorkWithMeSection