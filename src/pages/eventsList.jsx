import EventCard from "../components/eventCard";
import { useEffect, useState } from 'react';
import axios from 'axios';


const EventsList = () => {

    //Define  a state to store events
    const [events, setEvents] = useState([]);

    //Define a function to search events
    const getEvents = async () => {
        const response = await axios.get('https://ite-backend-1.onrender.com/events');
        if (response.status === 200) {
            setEvents(response.data);
        } else {
            setEvents([]);

        }
    }

    //Get events
    useEffect(() => {
        getEvents();
    }, []);


    return (
        <div className="py-[3rem]">

            <p className="text-center font-serif text-[25pt]">UPCOMING CONFERENCES</p>

            <div className="py-[5rem] px-[5rem] flex flex-wrap gap-[4rem] justify-center">

               {events.map(event => (
                <EventCard image={`https://savefiles.org/${event.flierUrl}?shareable_link=278`} Name={event.name} Venue={event.location} Date={event.date} Rate={event.price} />
               ))}


            </div>

        </div>
    );
};

export default EventsList;