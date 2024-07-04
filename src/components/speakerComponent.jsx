import { speaker1, speaker2, speaker3, speaker4 } from "../assets"
import SpeakerLinks from "./speakerLinks"
import SubSpeaker from "./subSpeaker"

const SpeakerComponent = () => {
    return (
        <div className="relative bg-[#C8E1FD] py-28">
            <div className="text-center mb-10">
                <h1 className="font-bold font-serif text-[24px] mb-2">HEAD SPEAKERS</h1>
                <p className="font-serif text-gray-500">If you are looking at blank cassettes on the web, you may be very confused <br /> at the difference in price. 
                    You may see some for as low as $.17 each.
                </p>
            </div>

            <div className="flex justify-center gap-4 font-serif w-screen">
                <SubSpeaker
                    images={speaker1}
                    text1="Theophilus Boateng"
                    text2="Fronted Engineer"/>
                {/* <SpeakerLinks /> */}

                <SubSpeaker
                    images={speaker2}
                    text1="Ruth Nyankum"
                    text2="Frontend Engineer" />
                    {/* <SpeakerLinks /> */}

                <SubSpeaker
                    images={speaker3}
                    text1="Ellen Ntiamoah"
                    text2="Backend Engineer" />
                    {/* <SpeakerLinks /> */}

                <SubSpeaker
                    images={speaker4}
                    text1="Gifty Amoakowaa"
                    text2="Backend Engineer" />
                    {/* <SpeakerLinks /> */}
            </div>
        </div>
    )
}

export default SpeakerComponent

//   bg-opacity-50 