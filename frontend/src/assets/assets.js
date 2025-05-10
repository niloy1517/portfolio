import picture from './man.webp'
import hero_picture from './developer.png'
import hero from './developer-programmer.png'



import html_logo from './html_logo.svg'
import css3_logo from './css3_logo.svg'
import javascript_logo from './javascript_logo.svg'
import react_logo from './react-logo.svg'
import tailwind_css_logo from './tailwind_css_logo.svg'
import bootstrap_logo from './bootstrap_logo.svg'
import nodejs_logo from './nodejs-logo.svg'
import expressjs_logo from './expressjs-logo.svg'
import mongodb_logo from './mongodb-logo.svg'
import firebase_logo from './firebase-logo.svg'
import vs_code_logo from './vs-code.svg'
import postman_logo from './postman.svg'
import git_logo from './git.svg'
import github_logo from './github.svg'
import netlify_logo from './netlify.svg'
import vercel_logo from './vercel.svg'
import problem_solving_logo from './problem-solving.png'
import communication_logo from './communication.png'
import teamwork_logo from './teamwork.png'



import project_2 from './project-2.png'
import project_3 from './project-3.webp'
import project_4 from './project-4.webp'



export const assets = {
    picture,
    hero_picture,
    hero,
}



export const tech_list = [
  {name: 'HTML', logo: html_logo, category: 'Frontend'},
  {name: 'CSS', logo: css3_logo, category: 'Frontend'},
  {name: 'JAVASCRIPT', logo: javascript_logo, category: 'Frontend'},
  {name: 'REACT.JS', logo: react_logo, category: 'Frontend'},
  {name: 'TAILWIND CSS', logo: tailwind_css_logo, category: 'Frontend'},
  {name: 'BOOTSTRAP', logo: bootstrap_logo, category: 'Frontend'},
  {name: 'NODE.JS', logo: nodejs_logo, category: 'Backend'},
  {name: 'EXPRESS.JS', logo: expressjs_logo, category: 'Backend'},
  {name: 'MONGODB', logo: mongodb_logo, category: 'Backend'},
  {name: 'FIREBASE', logo: firebase_logo, category: 'Backend'},
  {name: 'VS CODE', logo: vs_code_logo, category: 'Tools'},
  {name: 'GIT', logo: git_logo, category: 'Tools'},
  {name: 'GITHUB', logo: github_logo, category: 'Tools'},
  {name: 'POSTMAN', logo: postman_logo, category: 'Tools'},
  {name: 'NETLIFY', logo: netlify_logo, category: 'Tools'},
  {name: 'VERCEL', logo: vercel_logo, category: 'Tools'},
  {name: 'PROBLEM SOLVING', logo: problem_solving_logo, category: 'Soft skill'},
  {name: 'COMMUNICATION', logo: communication_logo, category: 'Soft skill'},
  {name: 'TEAM WORK', logo: teamwork_logo, category: 'Soft skill'},
]




export const projects = [
  { 
    id: 1, 
    name: 'E-commerce', 
    image: project_3, 
    description: "E-commerce website using MERN stack.", 
    sourceCode: "#", 
    liveLink: "#", 
    demo: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Firebase"
    ]
  },
  { 
    id: 2, 
    name: 'Portfolio', 
    image: project_2, 
    description: "Portfolio website with animations.", 
    sourceCode: "#", 
    liveLink: "#", 
    demo: [
      "React.js",
      "Tailwind CSS",
      "Express.js"
    ]
  },
  { 
    id: 3, 
    name: 'Blog', image: project_4, 
    description: "Blog platform with authentication.", 
    sourceCode: "#", 
    liveLink: "#" ,     
    demo: [
      "Node.js",
      "MongoDB",
      "Firebase"
    ]},
  { id: 5, name: 'E-commerce', image: project_4, description: "AI-powered image generator.", sourceCode: "#", liveLink: "#" },
  { id: 6, name: 'Dashboard', image: project_3, description: "Task management dashboard.", sourceCode: "#", liveLink: "#" },
];



// na ami chachi projects ar modhe jesob object a demo ache sei demo gulo ke dore ar modher data gulo ke alad