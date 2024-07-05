import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import EventsList from './eventsList';
import Footer from '../components/footer';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="h-screen bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('./assets/images/heroBg2.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
        <div className="w-1/2 text-white text-center">
          <p className="font-serif text-[25pt]">
            TOP TECH CONFERENCES & EVENTS <br /> 2024
          </p>

          <p className="my-[2rem]">
            Join us at the upcoming International Tech Event to explore
            groundbreaking innovations and connect with industry leaders shaping
            the future of technology.
          </p>

          <Link
            to={'/about-us'}
            className="py-3 px-4 rounded-md font-semibold bg-gradient-to-r from-purple-500 to-blue-500"
          >
            More about us
          </Link>
        </div>
      </div>

      <EventsList />

      <Footer />
    </>
  );
};

export default Home;
