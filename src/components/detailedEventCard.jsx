import { HeartIcon } from "@heroicons/react/24/outline";
import image6 from "../assets/images/intro6.webp";


const DetailedEventCard = () => {
    return (
        <div className="flex gap-x-8">

            <div>
                <img src={image6} alt="" />
            </div>

            <div className="flex flex-col justify-between w-1/2">

                <p className="font-semibold text-[20pt] mt-[0px]">Event Name</p>

                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quae, dolore vitae vero fugit deserunt nisi inventore magni eos, at eligendi! Expedita placeat, itaque necessitatibus animi laudantium repellendus non maiores?
                </p>

                <p>Location</p>

                <p>Price/Rate</p>

                <div>
                    <button>Buy Tickets Now!</button>

                    <button className="flex gap-4"> <HeartIcon className="size-[20px]"/> <span>Save Event</span> </button>
                </div>

            </div>

        </div>
    );
};

export default DetailedEventCard;