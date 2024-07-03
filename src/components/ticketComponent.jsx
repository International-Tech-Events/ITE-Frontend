// const TicketComponent = ({title, text1, amount, text2, text3, text4, text5, text6}) => {
//   return (
//     <div className="hover">
//       <div className="bg-blue-50 pl-[35px] pr-[50px] font-serif py-[40px]">
//         <h3 className="font-bold text-[20px] mb-3 text-[16px]">{title}</h3>
//         <p className="text-gray-600 mb-3">{text1}</p>
//         <p className="text-[28px] pb-[20px] font-bold text-blue-300">{amount}<span className="text-[14px] font-light">/mo</span></p>
//         <div className="text-[18px] text-gray-600 text-[13px]">
//             <p className="pb-[20px]">{text2}</p>
//             <p className="pb-[20px]">{text3}</p>
//             <p className="pb-[20px]">{text4}</p>
//             <p className="pb-[20px]">{text5}</p>
//             <p className="pb-[20px]">{text6}</p>
//         </div>     
//       </div>
//       <button className="inline-block bg-blue-400">Get Started</button>
//     </div>
//   )
// };

// export default TicketComponent;

const TicketComponent = ({ title, text1, amount, text2, text3, text4, text5, text6 }) => {
  return (
    <div className="group relative">
      <div className="bg-blue-50 pl-[35px] pr-[50px] font-serif py-[40px]">
        <h3 className="font-bold text-[20px] mb-3">{title}</h3>
        <p className="text-gray-600 mb-3">{text1}</p>
        <p className="text-[28px] pb-[20px] font-bold text-blue-300">{amount}<span className="text-[14px] font-light">/mo</span></p>
        <div className="text-[18px] text-gray-600 text-[13px]">
          <p className="pb-[20px]">{text2}</p>
          <p className="pb-[20px]">{text3}</p>
          <p className="pb-[20px]">{text4}</p>
          <p className="pb-[20px]">{text5}</p>
          <p className="pb-[20px]">{text6}</p>
        </div>
      </div>
      <button className="hidden group-hover:inline-block bg-blue-400 transition-opacity duration-300 ease-in-out absolute bottom-[-65px] left-1/2 transform -translate-x-1/2 px-[60px] py-[8px] rounded text-white">Get Started</button>
    </div>
  );
};

export default TicketComponent;
