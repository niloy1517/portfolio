import React, { useState } from 'react'
import './Skill.css'
import { tech_list } from '../../assets/assets'

const Skill = () => {
    const [showTech, setShowTect] = useState('Frontend')
    
  return (
    <div className='min-h-screen bg-[rgb(3,7,19)] text-white py-30'>
        <h1 className='font-pri text-center text-[40px] font-bold mb-8'>
            My <span className='text-[#03ABEE]'>Skills</span>
        </h1>
        <p className='font-sec text-center md:text-[18px] mx-6 md:mx-[6rem] lg:mx-[17rem] mb-20'>
            "Here are the technologies and tools I use to build responsive and scalable web applications."
        </p>
        {/* Navigate Button */}
        <div className='w-[90%] text-[14px] md:text-[16px] md:w-[65%] lg:w-[60%] flex flex-wrap justify-center px-4 space-x-6 md:space-x-10 font-medium bg-[#03ABEE] py-2 mx-auto rounded-[7px]'>
            <button onClick={() => setShowTect('Frontend')} className={showTech === 'Frontend' ? 'active-tech' : ''}>Frontend</button>
            <button onClick={() => setShowTect('Backend')} className={showTech === 'Backend' ? 'active-tech' : ''}>Backend</button>
            <button onClick={() => setShowTect('Tools')} className={showTech === 'Tools' ? 'active-tech' : ''}>Tools</button>
            <button onClick={() => setShowTect('Soft skill')} className={showTech === 'Soft skill' ? 'active-tech' : ''}>Soft Skill</button>
        </div>
        {/* Show Skill Tech */}
        <div className='w-[70%] md:w-[58%] lg:w-[50%] mt-10 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5'>
            {
                tech_list.map((item, index) => (
                    item.category === showTech && 
                    <div key={index} className='w-full h-30 md:h-35 lg:h-40 bg-[#101828] border hover:bg-[#101828]/30 rounded-[7px] cursor-pointer flex flex-col justify-center items-center'>
                        <img className='w-12 md:w-16 lg:w-18 h-12 md:h-16 lg:h-18' src={item.logo} alt="" />
                        <p className='pt-4 text-[12px] md:text-[14px] flex flex-wrap text-center'>{item.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skill