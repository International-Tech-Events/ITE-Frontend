import { speaker1, speaker2, speaker3, speaker4 } from "../assets"
import SubSpeaker from "./subSpeaker"

const SpeakerComponent = () => {
    return (
        <div>
            <div className="text-center mb-10">
                <h1 className="font-bold font-serif text-[24px] mb-2">HEAD SPEAKERS</h1>
                <p className="font-serif text-gray-500">If you are looking at blank cassettes on the web, you may be very confused <br /> at the difference in price. 
                    You may see some for as low as $.17 each.
                </p>
            </div>

            <div className="flex justify-center gap-10 font-serif">
                <SubSpeaker
                    images={speaker1}
                    text1="Theophilus Boateng"
                    text2="Fronted Engineer" />

                <SubSpeaker
                    images={speaker2}
                    text1="Ruth Nyankum"
                    text2="Frontend Engineer" />

                <SubSpeaker
                    images={speaker3}
                    text1="Ellen Ntiamoah"
                    text2="Backend Engineer" />

                <SubSpeaker
                    images={speaker4}
                    text1="Gifty Amoakowaa"
                    text2="Backend Engineer" />
            </div>
        </div>
    )
}

export default SpeakerComponent