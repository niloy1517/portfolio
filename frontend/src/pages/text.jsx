I’m Niloy Gope, a dedicated Full-Stack Developer focused on the MERN Stack. I enjoy turning innovative ideas into scalable, high-performance web applications that offer smooth and intuitive user experiences.

My core skills include React.js for frontend, Node.js & Express.js for backend, and MongoDB for database management.

I’m currently pursuing a Diploma in Computer Science and Technology, where I’ve built a solid foundation in data structures, algorithms, and modern software development practices.

I'm constantly exploring new technologies, building projects from scratch, and striving to become better every day.












for my skill
"Technologies and tools that help me build responsive, scalable, and user-centric web applications."



/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
  
        // ✅ Custom screen for 768px to 1023px
        'mid-only': { 'min': '768px', 'max': '1023px' },
      },
    },
    plugins: [],
  };
  




  <div class="text-base mid-only:text-blue-500">
  This text will be blue only on screens between 768px and 1023px.
</div>
