const SubContact = ({ formImage, text7, text8 }) => {
  return (
    <div className="flex mb-5 gap-5">
        <span>{formImage}</span>
        <div className="flex flex-col">
            <p className="font-semibold">{text7}</p>
            <p className="text-gray-500 font-thin text-[14px]">{text8}</p>
        </div>
    </div>
  )
};

export default SubContact;