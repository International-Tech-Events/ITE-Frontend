import ContactForm from "../components/contactForm"
import Footer from "../components/footer"
import HeroAll from "../components/heroAll"
import MapComponent from "../components/mapComponent"
import Navbar from "../components/navbar"

const Contact = () => {
  return (
    <div>
      <Navbar />
      
      <HeroAll 
      text9="HOME"
      text10="CONTECT"
      text11="Contact Us"/>

      <div className="mx-28 mt-20">
        <MapComponent />
      </div>
      
      {/* <div className="bg-[#F9F9FF]"> */}
        <ContactForm />
      {/* </div> */}
      
      <Footer />
    </div>
  )
}

export default Contact