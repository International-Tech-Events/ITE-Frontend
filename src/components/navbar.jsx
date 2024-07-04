import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center px-[4rem] py-[0.75] absolute top-0 text-yellow-100 font-serif">

            <Link to={'/home'}>ITE</Link>

            <div className="flex gap-8">
                <Link to={'/home'}>HOME</Link>
                <Link to={'/about-us'}>ABOUT</Link>
                <Link to={'/events'}>EVENTS</Link>
                <Link to={'/contact-us'}>CONTACT</Link>
                <Link to={'/admin'}>ADMIN</Link>
            </div>

            <div className="my-6 px-2 py-[3px] w-min  flex items-center gap-[4pt] border-2 border-green-100 rounded-[7px]">

                <button className="size-[17px]">
                    <MagnifyingGlassIcon />
                </button>

                <input type="search" placeholder="Search for events" className="px-1 bg-transparent text-[12px] text-white" />
                
            </div>

        </div>
    );
};

export default Navbar;