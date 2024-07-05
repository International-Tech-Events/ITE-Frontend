import { Link } from "react-router-dom";
const HeroAll = ({ text9, text10, text11, arrowIcon }) => {
  return (
    // <div className="bg-[url(./assest/images/heroBg2.jpg)] h-screen">
    //     {/* <img src={heroBg} alt="" /> */}
    //     <div>
    //         <span>{text9}</span>
    //         <span>{arrowIcon}</span>
    //         <span>{text10}</span>
    //         <p>{text11}</p>
    //     </div>
    // </div>

        <div className="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.8)),url('./assets/images/heroBg3.png')] 
        bg-cover h-[60vh] flex flex-col place-items-center place-content-center font-serif">
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
                <div className="flex flex-col items-center justify-center h-full text-white text-center">
                    <div className="text-[10px]">
                        <span className="pr-3">{text9} </span>
                        
                        <span>{">"}</span>
                        <span className="pl-4">{text10}</span>
                    </div>
                    <h1 className="text-4xl font-bold">{text11}</h1>
                </div>
        </div>
  )
};

export default HeroAll;