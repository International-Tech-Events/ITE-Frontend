import axios from "axios";
import Navbar from "../components/navbar";
import { useState } from "react";

const CreateEvent = () => {

    //Post event to backend
    const postEvent = async (event) => {
        event.preventDefault();

        //Collect all input 
        const formData = new FormData(event.target);

        //Post data to backend
        const response = await axios.post('https://ite-backend-1.onrender.com/events', formData)
        console.log(response);
    }


    const d = new Date();
    const minDate = d.getUTCFullYear() + '-0' + (d.getUTCMonth() + 1) + '-0' + d.getUTCDate();

    // const [ourFormData, setFormData] = useState({
    //     name: '',
    //     date: '',
    //     description: '',
    //     facilitator: '',
    //     price: '',
    //     location: '',
    //     flier: '',
    // });


    // const handleChange = (e) => {
    //     const {name, value} = e.target;

    //     setFormData({
    //         ...ourFormData,
    //         [name]: value
    //     });
    // }


    // const refreshSubmit = () => {
    //     // e.preventDefault();

    //     //reset form after submission
    //     setFormData({
    //         name: '',
    //         date: '',
    //         description: '',
    //         facilitator: '',
    //         price: '',
    //         location: '',
    //         flier: '',
    //     });
    // }


    return (

        <div className="h-screen bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('./assets/images/pexels.jpg')] bg-no-repeat bg-center bg-cover">

            <Navbar />

            <div className="w-screen h-screen flex items-center justify-center">

                <fieldset className="w-1/2 text-center text-yellow-50 border border-red-400 bg-[rgba(0,0,0,0.3)]">

                    <legend className="text-[18pt]">Create an event</legend>

                    <form onSubmit={postEvent} method="post" className="flex justify-center gap-x-4 py-[2rem] ">

                        <div className="text-right flex flex-col gap-4">
                            <label htmlFor="event-name">Event Name:</label>
                            <label htmlFor="date">Date:</label>
                            <label htmlFor="describe">Description:</label>
                            <label htmlFor="facilitator" className="mt-7">Facilitator:</label>
                            <label htmlFor="price">Price:</label>
                            <label htmlFor="location">Location:</label>
                            <label htmlFor="flier">Upload Flier:</label>
                        </div>

                        <div className="text-left flex flex-col gap-4">
                            <input id="event-name" name="name" type="text" minLength={'3'} className="bg-transparent border px-2" required/>
                            
                            <input id="date" name="date" type="date" min={minDate} defaultValue={minDate} className="text-blue-800 border px-2" required/>

                            <textarea name="description" id="describe" className="bg-transparent border px-2" required></textarea>

                            <input id="facilitator" name="facilitator" type="text" className="bg-transparent border px-2" required/>

                            <input id="price" type="number" name="price" className="bg-transparent border px-2" required/>

                            <input id="location" type="text" name="location" minLength={'3'} maxLength={'100'} className="bg-transparent border px-2" required/>

                            <input id="flier" name="flier" type="file" accept="image/png, image/jpeg" required/>

                            <div className="flex justify-evenly">
                                <button type="submit" name="submit" className="hover:bg-yellow-950 border rounded-full px-4 py-[5px] w-[8rem]">Post Event</button>
                                <button type="reset" className="hover:bg-yellow-950 border rounded-full px-4 py-[5px] w-[8rem]">Reset Form</button>
                            </div>
                        </div>

                    </form>

                </fieldset>

            </div>

        </div>

    );
};

export default CreateEvent;