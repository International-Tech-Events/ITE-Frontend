import EventCard from "../components/eventCard";
import { useEffect, useState } from 'react';
import axios from 'axios';



const EventsList = () => {

    //Define a state to store events
    const [events, setEvents] = useState([]);

    //Define your fxn to fetch events
    const fetchEvents = async () => {

        const response = await axios.get('https://ite-backend-1.onrender.com/events');

        if (response.status === 200) {
            setEvents(response.data);
        } else {
            setEvents([]);
        }
    };


    //Get events
    useEffect(() => {
        fetchEvents();
    }, []);


    return (
        <div className="py-[3rem]">

            <p className="text-center font-serif text-[25pt]">UPCOMING CONFERENCES</p>

            <div className="py-[5rem] px-[5rem] flex flex-wrap gap-[4rem] justify-center">

                {events.map(item => (
                    <EventCard image={`https://savefiles.org/${item.flierUrl}?shareable_link=278`} name={item.name} venue={item.location} date={item.date} rate={item.price}/>
                ))}

            </div>

        </div>
    );
};

export default EventsList;