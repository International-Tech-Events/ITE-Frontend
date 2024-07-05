import { speaker1, speaker2, speaker3, speaker4 } from '../assets';
import SpeakerLinks from './speakerLinks';
import SubSpeaker from './subSpeaker';

const SpeakerComponent = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-200 to-blue-200 py-20">
      <div className="text-center mb-10">
        <h1 className="font-bold font-serif text-[28px] mb-2">
          ITE EXECUTIVES
        </h1>
        <p className="font-serif text-gray-500 text-[18px]">
          The executives of International Tech Event (ITE) are a distinguished
          group of industry leaders <br />
          and visionaries dedicated to advancing technology and fostering
          innovation.
        </p>
      </div>

      <div className="flex justify-center gap-4 font-serif w-full">
        <SubSpeaker
          images={speaker1}
          text1="Theophilus Boateng"
          text2="Fronted Engineer"
        />
        {/* <SpeakerLinks /> */}

        <SubSpeaker
          images={speaker2}
          text1="Ruth Nyankum"
          text2="Frontend Engineer"
        />
        {/* <SpeakerLinks /> */}

        <SubSpeaker
          images={speaker3}
          text1="Ellen Ntiamoah"
          text2="Backend Engineer"
        />
        {/* <SpeakerLinks /> */}

        <SubSpeaker
          images={speaker4}
          text1="Gifty Amoakowaa"
          text2="Backend Engineer"
        />
        {/* <SpeakerLinks /> */}
      </div>
    </div>
  );
};

export default SpeakerComponent;

//   bg-opacity-50
