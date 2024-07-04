import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home';
import CreateEvent from './pages/createEvent';
import AdminLanding from './pages/adminLanding';
import DetailedEventCard from './components/detailedEventCard';



export default function App() {

  const myRouter = createBrowserRouter([

    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/admin', element: <AdminLanding /> },
    { path: '/create-event', element: <CreateEvent /> },
    { path: '/detailed-event', element: <DetailedEventCard /> },
  ]);


  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}


