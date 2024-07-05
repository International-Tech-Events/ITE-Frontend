import DetailedEventCard from "../components/detailedEventCard";
import { useEffect, useState } from 'react';
import axios from 'axios';



const Events = () => {

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
        <div>
            {events.map(item => (
                <DetailedEventCard name={item.name} date={item.date} description={item.description} facilitator={item.facilitator} price={item.price} location={item.location} flier={`https://savefiles.org/${item.flierUrl}?shareable_link=278`} />
            ))}
        </div>
    );
};

export default Events;