import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateEvent from './pages/createEvent';
import AdminLanding from './pages/adminLanding';
import DetailedEventCard from './components/detailedEventCard';
import About from './pages/about'
import Speakers from './pages/speakers'
import Events from './pages/events'
import Contact from './pages/contact'
import Home from './pages/home';



export default function App() {

  const router = createBrowserRouter([

    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/admin', element: <AdminLanding /> },
    { path: '/create-event', element: <CreateEvent /> },
    { path: '/detailed-event', element: <DetailedEventCard /> },
    {
      path: "/about-us",
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
  ]);


  return (
    <RouterProvider router={router} />
  )
}


