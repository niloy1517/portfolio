import React from 'react'
import { assets } from '../../assets/assets'

const ReadMoreAbout = () => {
  return (
    <div className='min-h-screen bg-[rgb(3,7,19)] pb-40 text-white'>
      <div>
        <div>
          <div className=''>
            <img src={assets.about_pic} alt="" />
          </div>
          <div>
            <div>
              <h1>Frontend Development Journey</h1>
              <p>I was always curious about the web, and my interest grew as I started building websites using HTML, CSS, and JavaScript. With time, I explored React + Vite, which helped me create faster and more dynamic applications. Frontend development became more than just a skill — it became my passion.</p>
            </div>
            <div>
              <h1>Backend Development Journey</h1>
              <p>My curiosity to understand how websites work behind the scenes led me to backend development. I started with Node.js and Express.js, building RESTful APIs and connecting databases using MongoDB. Over time, I learned how to handle authentication, manage server logic, and ensure application performance and security. Backend development gave me a deeper understanding of how full-stack systems truly work.</p>
            </div>
          </div>
        </div>
        <div>
          <h1>Education</h1>
          <div>
            <h1>Diploma in Engineering (Ongoing)</h1>
            <p>Institute: Habiganj Polytechnic Institute</p>
            <p>Department: Computer Science and Technology</p>
            <p>Status: Final Year</p>
            <p>Focus Areas: Web Development, Programming, Database Management</p>
          </div>
          <div>
            <h1>Secondary School Certificate (SSC) – 2021</h1>
            <p>Institute: Habiganj Technical School & College</p>
            <p>Group: Science / Technical</p>
            <p>Achievements: Built a strong foundation in mathematics and logical thinking</p>
          </div>
        </div>
        <div>
          <h1>What I Do?</h1>
          <ul>
            <li>Build responsive and interactive user interfaces using React.js, ensuring a seamless user experience across devices.</li>
            <li>Develop robust backend systems with Node.js and Express.js, focusing on efficiency and scalability.</li>
            <li>Manage and optimize databases using MongoDB and Firebase to ensure data integrity and performance.</li>
            <li>Focus on application performance, scalability, and security to create high-quality products.</li>
            <li>Implement Firebase authentication, REST APIs, and integrate third-party services to enhance functionality.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ReadMoreAbout