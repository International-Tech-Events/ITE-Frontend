const SubSpeaker = ({ images, text1, text2 }) => {
  return (
    <div>
        <img src={images} alt="" className="h-[250px] w-[200px]"/>
        <div className="text-center">
            <p className="text-[18px] font-semibold">{text1}</p>
            <p className="text-[14px] text-gray-500">{text2}</p>
        </div>
    </div>
  )
};

export default SubSpeaker;