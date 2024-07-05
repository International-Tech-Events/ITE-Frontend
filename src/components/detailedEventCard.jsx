import { HeartIcon } from "@heroicons/react/24/outline";


const DetailedEventCard = ({name, date, description, facilitator, price, location, flier}) => {
    

    return (
        <div className="flex gap-x-8 px-8 py-8 mb-2">

            <div>
                <img src={flier} alt="" className="w-[690px] rounded-tl-3xl rounded-br-3xl"/>
            </div>

            <div className="flex flex-col justify-between w-1/2">

                <p className="font-semibold text-[20pt] mt-[0px]">{name}</p>

                <p>{description}</p>

                <p className="font-semibold">{facilitator}</p>

                <p>{location}</p>

                <p>{date}</p>

                <p> <span className="font-bold">US$</span> {price}</p>

                <div className="flex gap-9">
                    <button className="border px-6 py-[0.6rem] bg-blue-600 text-white hover:text-white hover:bg-black">Buy Ticket Now!</button>

                    <button className="flex gap-2 items-center border px-6 py-[0.6rem] bg-black text-white hover:bg-[#CECECE]"> <HeartIcon className="size-[18px]"/> <span>Save Event</span> </button>
                </div>

            </div>

        </div>
    );
};

export default DetailedEventCard;