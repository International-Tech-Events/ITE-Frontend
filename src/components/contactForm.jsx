import { EnvelopeIcon, HomeIcon } from "@heroicons/react/24/outline";
import SubContact from "./subContact";
import { PhoneIcon } from "@heroicons/react/24/outline";

const ContactForm = () => {
  return (
    <div>
        <div className="font-serif">
            <div className="flex">
                <SubContact
                formImage={<HomeIcon className="h-9 w-8"/>}
                text7="Vancouver Canada"
                text8="British Columbi" />
            </div>

            <div className="flex">
                <SubContact
                formImage={<PhoneIcon className="h-9 w-8"/>}
                text7="+233 500 000 022"
                text8="Mon to Fri 9am to 6 pm" />
            </div>

            <div className="flex">
                <SubContact
                formImage={<EnvelopeIcon className="h-9 w-8"/>}
                text7="support@ite.com"
                text8="Send us your query anytime!" />
            </div>
        </div>

        <form action="">
            <div className="outline-none flex flex-col">
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Enter email address" />
                <input type="text" placeholder="Enter Subject" />
            </div>

            <div>
                <textarea name="" id=""></textarea>
            </div>
        </form>
        <button>Send Message</button>
    </div>
  )
};

export default ContactForm;