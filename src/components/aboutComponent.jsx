import { aboutImg } from '../assets';

const AboutComponent = () => {
  return (
    <div className="flex flex-row place-content-center my-24 gap-x-16 mx-28 items-center">
      <img className="h-[500px] w-[600px]" src={aboutImg} alt="" />

      <div className="w-[40%] font-serif">
        <h1 className="text-[28px] font-bold text-center italic">WELCOME TO</h1>
        <h1 className="text-[34px] font-bold mb-10">
          INTERNATIONAL TECH EVENT
        </h1>
        <p className="mb-7 text-[20px] mt-10">
          The global hub for tech enthusiasts and leaders. Discover innovations,
          join interactive workshops, and network with industry experts.
          Explore, learn, and connect with the future of technology.
        </p>
        <p className="mb-7 text-[20px] mt-16">
          The premier global gathering for technology enthusiasts and industry
          leaders.
        </p>
        <button className="py-4 px-8 bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white rounded-[5px] ml-48 mt-12">
          View More Details
        </button>
      </div>
    </div>
  );
};

export default AboutComponent;
