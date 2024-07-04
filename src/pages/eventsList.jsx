import EventCard from "../components/eventCard";

const EventsList = () => {
    return (
        <div className="py-[3rem]">

            <p className="text-center font-serif text-[25pt]">UPCOMING CONFERENCES</p>

            <div className="py-[5rem] px-[5rem] flex flex-wrap gap-[4rem] justify-center">

                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />

            </div>

        </div>
    );
};

export default EventsList;