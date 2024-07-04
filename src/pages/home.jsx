import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import EventsList from "./eventsList";

const Home = () => {
    return (
        <>
            <Navbar />

            <div className="h-screen bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('./assets/images/hero1.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">

                <div className="w-1/2 text-white text-center">
                    <p className="font-serif text-[25pt]">UPCOMING INTERNATIONAL CONFERENCES<br /> IN GHANA</p>

                    <p className="my-[2rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quam eius. Itaque temporibus cupiditate facere suscipit blanditiis. Pariatur minus autem quo perferendis? Atque explicabo earum delectus reiciendis, voluptatem fuga dicta.
                    </p>

                    <Link to={'/about-us'} className="py-3 px-4 rounded-md font-semibold bg-[rgba(215,215,0,0.7)]">More about us</Link>
                </div>

            </div>

            <EventsList />

        </>

    );
};

export default Home;