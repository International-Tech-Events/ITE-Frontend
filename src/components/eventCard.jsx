import { Link } from 'react-router-dom';
import image1 from '../assets/images/intro4.webp';
import { useEffect, useState } from 'react';
import axios from 'axios';

const EventCard = ({image, Name, Venue, Date, Rate}) => {

    return (
        <div className="">

            <div className=''>
                <img src={image} alt="" className="w-[500px] rounded-tr-3xl"/>
            </div>

            <div className="bg-gray-100 px-4 rounded-bl-3xl">

                <p className='font-bold text-[20pt]'>{Name}</p>

                <p className='font-semibold text-[15pt]'>{Venue}</p>

                <div className='flex justify-between pb-2'>
                    <span>{Date}</span>
                    <span>{Rate}</span>
                </div>

            </div>

        </div>
    );
};

export default EventCard;