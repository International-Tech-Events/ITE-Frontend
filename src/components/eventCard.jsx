import { Link } from 'react-router-dom';
import image1 from '../assets/images/intro4.webp';



const EventCard = ({image, name, venue, date, rate}) => {

    return (
        <div className="">

            <div className=''>
                <img src={image} alt="" className="w-[500px] rounded-tr-3xl rounded-tl-3xl"/>
            </div>

            <div className="bg-gray-100 px-4">

                <p className='font-bold text-[20pt]'>{name}</p>

                <p className='font-semibold text-[15pt]'>{venue}</p>

                <div className='flex justify-between pb-2'>
                    <span>{date}</span>
                    <span>{rate}</span>
                </div>

            </div>

        </div>
    );
};

export default EventCard;