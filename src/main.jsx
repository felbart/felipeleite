import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'

// const router = createBrowserRouter ([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "about",
//     element: <About />
//   },
// ])

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },  
      {
        path: "/about",
        element: <About />
      },  
      {
        path: "/projects",
        element: <Projects />
      },  
      {
        path: "/projects/:id",
        element: <ProjectDetails />
      },  
      {
        path: "/blog",
        element: <Blog />
      },  
      {
        path: "/contact",
        element: <Contact />
      },  
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
