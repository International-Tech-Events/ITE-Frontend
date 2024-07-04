import { Link } from 'react-router-dom';
import image1 from '../assets/images/intro4.webp';

const EventCard = () => {
    return (
        <div className="">

            <div className=''>
                <img src={image1} alt="" className="w-[500px] rounded-tr-3xl"/>
            </div>

            <div className="bg-gray-100 px-4 rounded-bl-3xl">

                <p className='font-bold text-[20pt]'>Event Name</p>

                <p className='font-semibold text-[15pt]'>Venue</p>

                <div className='flex justify-between pb-2'>
                    <span>Date</span>
                    <span>Rate/Price</span>
                </div>

                <Link></Link>

            </div>

        </div>
    );
};

export default EventCard;