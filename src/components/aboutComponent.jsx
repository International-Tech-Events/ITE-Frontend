import { aboutImg } from "../assets";

const AboutComponent = () => {
    return (
        <div className="flex flex-row place-content-center my-24 gap-x-16 mx-28 items-center">
            <img className="h-[500px] w-[600px]" src={aboutImg} alt="" />

            <div className="w-[40%] font-serif">
                <h1 className="mt-3 mb-5 text-[40px] font-bold">WELCOME TO ITE</h1>
                <p className="mb-7 text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-7 text-[16px]">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <button className="py-4 px-8 bg-blue-300 hover:bg-sky-700 hover:text-white rounded-[5px]">View More Details</button>
            </div>
        </div>
    )
};

export default AboutComponent;