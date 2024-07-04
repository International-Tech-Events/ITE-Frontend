import AboutComponent from "../components/aboutComponent";
import Footer from "../components/footer";
import HeroAll from "../components/heroAll";
import MapComponent from "../components/mapComponent";
import SpeakerComponent from "../components/speakerComponent";

const About = () => {
  return (
    <div>
        <HeroAll 
        text9="HOME"
        text10="ABOUT"
        text11="About Us"/>

        <AboutComponent />

        <MapComponent />
      
        <SpeakerComponent />

        <Footer />
    </div>
  )
};

export default About;