import { HeartIcon } from "@heroicons/react/16/solid";
import FooterSocial from "./footerSocial";
import SpeakerLinks from "./speakerLinks";

const Footer = () => {
  return (
    <div className="w-screen h-screen bg-[#04091E] font-serif pt-28">

        <div className=" text-white flex place-content-evenly ">
            <div>
                <h3 className="font-bold text-[20px] mb-5">TOP PRODUCTS</h3>
                    <p className="mb-3 text-[14px]">Managed Website</p>
                    <p className="mb-3 text-[14px]">Manage Reputation</p>
                    <p className="mb-3 text-[14px]">Power Tools </p>
                    <p className="mb-3 text-[14px]">Marketing Service</p>
                </div>

            <div>
                <h3 className="font-bold text-[20px] mb-5">NEWS LETTER</h3>
                <p className="mb-3 text-[14px]">You can trust us. we only send promo offers, not a single spam.</p>
                <div>
                    <span className="pl-2 py-3 pr-24 bg-white text-gray-400 text-[12px] rounded-3xl font-serif mr-4">Your email address</span>
                    <span><button className="pl-7 py-3 pr-7 bg-blue-400 text-white text-[12px] rounded-3xl font-serif">Subscribe</button></span>
                </div>
            </div>

            <div>
                <h3 className="font-bold text-[20px] mb-5">INSTAGRAM FEED</h3>
                <FooterSocial />
            </div>
        </div>

        <div className="text-white text-[14px] mt-7 flex place-content-evenly">
            <div className="flex ">
                <span>Copyright ©2024 All rights reserved | This template is made with</span>
                <span><HeartIcon className="h-5 w-5"/></span>
                <span> by Team 15</span>
            </div>
            {/* <p>Copyright ©2024 All rights reserved | This template is made with <span></span></p> */}
            <div>
                <SpeakerLinks />
            </div>
        </div>

    </div>
  )
};

export default Footer;