import { EnvelopeIcon, HomeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import StyledSubContact from "./styledSubContact";
// import { map } from "../assets";
import map from "../assets/images/map1.png"

const MapComponent = () => {
  return (
    <div className="relative flex flex-col lg:flex-row min-h-[80vh]">
      {/* Static Map Image */}
      <div className="w-screen h-[70vh] relative">
        <img
          src={map} // Replace with the path to your map image
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contact Information */}
      <div className="absolute bg-white p-8 mt-8 mr-8 shadow-lg rounded-lg w-full lg:w-1/3 right-3">
        <div className="font-serif">
          <StyledSubContact
            formImage={<HomeIcon className="h-9 w-8 text-purple-500" />}
            text7="California, United States"
            text8="Santa Monica Boulevard"
          />
          <StyledSubContact
            formImage={<PhoneIcon className="h-9 w-8 text-purple-500" />}
            text7="00 (440) 9865 562"
            text8="Mon to Fri 9am to 6 pm"
          />
          <StyledSubContact
            formImage={<EnvelopeIcon className="h-9 w-8 text-purple-500" />}
            text7="support@colorlib.com"
            text8="Send us your query anytime!"
          />
        </div>
      </div>
    </div>
  );
};

export default MapComponent; 
