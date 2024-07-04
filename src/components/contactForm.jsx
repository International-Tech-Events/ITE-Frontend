import { EnvelopeIcon, HomeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import SubContact from "./subContact";

const ContactForm = () => {
  return (
    <div className="container mx-auto py-12 px-4 font-serif">
      
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Contact Information */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <SubContact
              formImage={<HomeIcon className="h-9 w-8 text-purple-500" />}
              text7="Vancouver, Canada"
              text8="British Columbia"
            />
            <SubContact
              formImage={<PhoneIcon className="h-9 w-8 text-purple-500" />}
              text7="+233 500 000 022"
              text8="Mon to Fri 9am to 6 pm"
            />
            <SubContact
              formImage={<EnvelopeIcon className="h-9 w-8 text-purple-500" />}
              text7="support@ite.com"
              text8="Send us your query anytime!"
            />
          </div>
          
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 lg:pl-12">
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <input type="text" placeholder="Enter your name" className="border border-gray-300 pl-2 py-2 text-[12px] rounded outline-none focus:border-purple-500" />
                <input type="email" placeholder="Enter email address" className="border border-gray-300 pl-2 py-2 text-[12px] rounded outline-none mt-4 focus:border-purple-500" />
                <input type="text" placeholder="Enter Subject" className="border border-gray-300 pl-2 py-2 text-[12px] rounded outline-none mt-4 focus:border-purple-500" />
              </div>
              <div className="flex flex-col lg:row-span-3">
                <textarea placeholder="Enter Message" className="border border-gray-300 p-3 rounded outline-none h-[80%] text-[12px] focus:border-purple-500"></textarea>
              </div>
            </form>
            <button className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-6 rounded shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              Send Message
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default ContactForm;
