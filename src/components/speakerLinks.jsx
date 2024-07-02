import { facebook, linkedin, twiter } from "../assets"



const SpeakerLinks = () => {
  return (
    <div className="h-[24px] w-[24px] hover:text-blue-500">
        <img src={facebook} alt="" />
        <img src={twiter} alt="" />
        <img src={linkedin} alt="" />
    </div>
  )
}

export default SpeakerLinks