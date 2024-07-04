
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import About from './pages/about'
import Speakers from './pages/speakers'
import Events from './pages/events'
import Contact from './pages/contact'
import Home from './pages/home'

function App() {
  const router = createBrowserRouter ([

    {
      path: "/home",
      element: <Home />
    },

    {
      path: "/about",
      element: <About />
    },

    {
      path: "/speakers",
      element: <Speakers />
    },

    {
      path: "/events",
      element: <Events />
    },

    {
      path: "/contact-us",
      element: <Contact />
    }

  ])

  return (
     <RouterProvider router={router} />
  )
}

export default App
