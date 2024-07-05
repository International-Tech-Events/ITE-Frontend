// import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     return (
//         <div className="w-full flex justify-between items-center px-[4rem] py-[0.75] top-0 text-purple-500 fixed font-serif">

//             <Link to={'/home'}>ITE</Link>

//             <div className="flex gap-8">
//                 <Link to={'/home'}>HOME</Link>
//                 <Link to={'/about-us'}>ABOUT</Link>
//                 <Link to={'/events'}>EVENTS</Link>
//                 <Link to={'/contact-us'}>CONTACT</Link>
//                 <Link to={'/admin'}>ADMIN</Link>
//             </div>

//             <div className="my-6 px-2 py-[3px] w-min  flex items-center gap-[4pt] border-2 border-green-100 rounded-[7px]">

//                 <button className="size-[17px]">
//                     <MagnifyingGlassIcon />
//                 </button>

//                 <input type="search" placeholder="Search for events" className="px-1 bg-transparent text-[12px] text-white" />

//             </div>

//         </div>
//     );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full flex justify-between items-center px-[4rem] py-[0.75rem] top-0 fixed font-serif transition-all duration-300 z-10 ${
        scrolled ? 'bg-black text-white' : 'text-purple-500'
      }`}
    >
      {/* <Link to={'/home'} className={`${scrolled ? 'text-white' : 'text-purple-500'}`}>ITE</Link> */}
      <Link
        to={'/home'}
        className={`${scrolled ? 'text-white' : 'text-purple-500'}`}
      >
        <img src={logo} alt="" className="h-[40px] w-[60px]" />
      </Link>

      <div className="flex gap-8">
        <Link
          to={'/home'}
          className={`${scrolled ? 'text-white' : 'text-purple-500'}`}
        >
          HOME
        </Link>
        <Link
          to={'/about-us'}
          className={`${scrolled ? 'text-white' : 'text-purple-500'}`}
        >
          ABOUT
        </Link>
        <Link
          to={'/events'}
          className={`${scrolled ? 'text-white' : 'text-purple-500'}`}
        >
          EVENTS
        </Link>
        <Link
          to={'/contact-us'}
          className={`${scrolled ? 'text-white' : 'text-purple-500'}`}
        >
          CONTACT
        </Link>
        <Link
          to={'/admin'}
          className={`${scrolled ? 'text-white' : 'text-purple-500'}`}
        >
          ADMIN
        </Link>
      </div>

      <div className="my-6 px-2 py-[3px] w-min flex items-center gap-[4pt] border-2 border-green-100 rounded-[7px]">
        <button className={`${scrolled ? 'text-white' : 'text-purple-500'}`}>
          <MagnifyingGlassIcon />
        </button>
        <input
          type="search"
          placeholder="Search for events"
          className="px-1 bg-transparent text-[12px] text-white"
        />
      </div>
    </div>
  );
};

export default Navbar;
