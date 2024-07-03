import { facebook, linkedin, twiter } from "../assets"



const SpeakerLinks = () => {
  return (
    <div className="flex space-x-4 h-4 w-4 hover:text-blue-500 ">
        <img src={facebook} alt="" />
        <img src={twiter} alt="" />
        <img src={linkedin} alt="" />
    </div>
  )
}

export default SpeakerLinks