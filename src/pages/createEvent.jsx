import axios from "axios";
import Navbar from "../components/navbar";

const CreateEvent = () => {

    const d = new Date();
    const minDate = d.getUTCFullYear() + '-0' + (d.getUTCMonth() + 1) + '-0' + d.getUTCDate();
    // console.log(minDate);


    //Post event to backend
    const postEvent = async (event) => {
        event.preventDefault();

        //Collect all inputs
        const formData = new FormData(event.target)

        //Post data to backend
        const response = await axios.post('https://ite-backend-1.onrender.com/events', formData);
        console.log(response);
    }


    return (

        <div className="h-screen bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('./assets/images/pexels.jpg')] bg-no-repeat bg-center bg-cover">

            <Navbar />

            <div className="w-screen h-screen flex items-center justify-center">

                <fieldset className="w-1/2 text-center text-yellow-50 border border-red-400 bg-[rgba(0,0,0,0.3)]">

                    <legend className="text-[18pt]">Create an event</legend>

                    <form action="" method="post" encType="multipart/form-data" className="flex justify-center gap-x-4 py-[2rem] ">

                        <div className="text-right flex flex-col gap-8">
                            <label htmlFor="event-name">Event Name:</label>
                            <label htmlFor="date">Date:</label>
                            <label htmlFor="price">Rate:</label>
                            <label htmlFor="location">Venue:</label>
                            <label htmlFor="flier">Upload Flier:</label>
                        </div>

                        <div className="text-left flex flex-col gap-8">
                            <input id="event-name" type="text" minLength={'3'} maxLength={'100'} className="bg-transparent border px-2" required/>
                            
                            <input id="date" type="date" min={minDate} defaultValue={minDate} className="text-blue-800 border px-2" required/>

                            <input id="price" type="number" className="bg-transparent border px-2" required/>

                            <input id="location" type="text" minLength={'3'} maxLength={'100'} className="bg-transparent border px-2" required/>

                            <input id="flier" type="file" accept="image/png, image/jpeg" required/>

                            <div className="flex justify-evenly">
                                <button type="submit" className="border rounded-full px-4 py-[5px] w-[8rem]">Post Event</button>
                                <button type="reset" className="border rounded-full px-4 py-[5px] w-[8rem]">Reset Form</button>
                            </div>
                        </div>

                    </form>

                </fieldset>

            </div>

        </div>

    );
};

export default CreateEvent;