import React, { useState } from 'react'
import './Skill.css'
import { tech_list } from '../../assets/assets'

const Skill = () => {
    const [showTech, setShowTect] = useState('Frontend')
    
  return (
    <div className='bg-[rgb(3,7,19)] text-white py-20'>
        <h1 className='text-center text-[40px] font-bold mb-8 text-[#e13e0f]'>My Skills</h1>
        <p className='text-center md:text-[18px] mx-6 md:mx-[6rem] lg:mx-[17rem] mb-20'>"Here are the technologies and tools I use to build responsive and scalable web applications."</p>
        <div className='w-[90%] text-[14px] md:text-[16px] md:w-[80%] lg:w-[60%] flex flex-wrap justify-center px-4 space-x-6 md:space-x-10 font-medium bg-[#e13e0f] py-2 mx-auto rounded-[7px]'>
            <button onClick={() => setShowTect('Frontend')} className={showTech === 'Frontend' ? 'active-tech' : ''}>Frontend</button>
            <button onClick={() => setShowTect('Backend')} className={showTech === 'Backend' ? 'active-tech' : ''}>Backend</button>
            <button onClick={() => setShowTect('Tools')} className={showTech === 'Tools' ? 'active-tech' : ''}>Tools</button>
            <button onClick={() => setShowTect('Soft skill')} className={showTech === 'Soft skill' ? 'active-tech' : ''}>Soft Skill</button>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-4 lg:gap-8 md:mx-10 lg:mx-70 mt-20'>
            {
                tech_list.map((item, index) => (
                    item.category === showTech && 
                    <div key={index} className='w-35 h-45 bg-[#101828] border hover:border-[#e13e0f] rounded-[7px] cursor-pointer flex flex-col justify-center items-center'>
                        <img className='w-20 h-20' src={item.logo} alt="" />
                        <p className='pt-4 text-[15px]'>{item.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skill