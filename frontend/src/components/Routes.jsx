import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'

import About from '../pages/About/About.jsx'
import Service from '../pages/Service/Service.jsx'
import Project from '../pages/Project/Project.jsx'
import Contact from '../pages/Contact/Contact.jsx'
import Home from '../pages/Home/Home.jsx'


const route = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {index: true, Component: Home},
            {path: 'about', Component: About},
            {path: 'service', Component: Service},
            {path: 'project', Component: Project},
            {path: 'contact', Component: Contact}
        ]
    }
])

export default route