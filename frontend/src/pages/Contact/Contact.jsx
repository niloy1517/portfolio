import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const Contact = () => {
  return (
    <div className='min-h-screen bg-[rgb(3,7,19)] pb-40 text-white'>
      <h1 className='text-center font-bold text-[35px] pt-10'>Get In <span className='text-[#03ABEE]'>Touch</span></h1>
      <p className='text-center text-[18px] pt-3 pb-20 mx-1.5'>I'll try to respond as soon as possible. Looking forward to connecting!</p>
      <div className='flex flex-col-reverse md:flex-row justify-around'>
        <div className='flex flex-col justify-center text-center items-center'>
          <p className='text-[25px] pt-20 md:pt-0 font-bold pb-10 text-[#0072c6]'>Contact Info</p>
          <div className='flex flex-col justify-center text-center items-center gap-10'>
            <div className='flex flex-col items-center'>
              <div className='w-10 h-10 bg-[#ff6347]/25 rounded-full flex justify-center items-center'>
                <FaLocationDot className='text-[20px] text-[#ff6347]' />
              </div>
              <p className='text-[18px] font-medium pt-1.5'>Location</p>
              <a href="https://maps.app.goo.gl/d1cWmgCwy4a9qyxJ7" className='hover:text-[#ff6347]'>Habiganj, Bangladesh</a>
            </div>
            <div className='flex flex-col items-center'>
              <div className='w-10 h-10 bg-[#25D366]/25 rounded-full flex justify-center items-center'>
                <FaPhoneAlt className='text-[20px] text-[#25D366]' />
              </div>
              <p className='text-[18px] font-medium pt-1.5'>WhatsApp</p>
              <a href="https://wa.me/8801736088083" target="_blank" className='hover:text-[#25D366]'>+880 1736088083</a>
            </div>
            <div className='flex flex-col items-center'>
              <div className='w-10 h-10 bg-[#0072c6]/25 rounded-full flex justify-center items-center'>
                  <IoMdMail className='text-[20px] text-[#0072c6]' />
              </div>
              <p className='text-[18px] font-medium pt-1.5'>Email</p>
              <a href="mailto:niloygope111@gmail.com?subject=Contact%20from%20Website&body=Hello%20Niloy%2C%0AI%20am%20interested%20in%20your%20portfolio." target="_blank" className='hover:text-[#0072c6]'>niloygope111@gmail.com</a>
            </div>
          </div>
        </div>
        <div className='bg-[#101828] w-[90%] mx-auto md:w-[50%] md:mx-20 rounded-[7px]'>
          <p className='text-[25px] font-bold mx-5 md:mx-10 pt-6'>Send me a message</p>
          <form className='mx-5 md:mx-10 flex flex-col mt-10' action="">
            <label htmlFor="name" className='text-[18px] pb-1'>Name</label>
            <input className='bg-white/10 py-4 px-2 rounded-[7px] mb-5 focus:outline-2 focus:outline-[#0072c6]' type="text" name="name" id="name" placeholder='Enter your full name' />

            <label htmlFor="email" className='text-[18px] pb-1'>Email</label>
            <input className='bg-white/10 py-4 px-2 rounded-[7px] mb-5 focus:outline-2 focus:outline-[#0072c6]' type="text" name="email" id="email" placeholder='Enter your email' />

            <label htmlFor="message" className='text-[18px] pb-1'>Message</label>
            <textarea className='min-h-[150px] bg-white/10 py-4 px-2 rounded-[7px] mb-10 focus:outline-2 focus:outline-[#0072c6]' name="message" id="message" placeholder='Enter your message...'></textarea>

            <input className='bg-blue-600 w-[130px] h-[40px] rounded-[7px] cursor-pointer font-medium mb-10' type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact