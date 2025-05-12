import { createBrowserRouter } from 'react-router-dom'

import MainLayout from './MainLayout/MainLayout.jsx'
import SecondaryLayout from './SecondaryLayout/SecondaryLayout.jsx'
import ReadMoreAbout from '../pages/ReadMoreAbout/ReadMoreAbout.jsx'
import Contact from '../pages/Contact/Contact.jsx'



const route = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
    },
    {
        path: '/',
        Component: SecondaryLayout,
        children: [
            {
                path: '/readMore',
                Component: ReadMoreAbout
            },
            {
                path: '/contact',
                Component: Contact
            }
        ]
    }
])

export default route