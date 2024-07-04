import ContactForm from "../components/contactForm"
import Footer from "../components/footer"
import HeroAll from "../components/heroAll"

const Contact = () => {
  return (
    <div>
      <HeroAll 
      text9="HOME"
      text10="CONTECT"
      text11="Contact Us"/>

      <ContactForm />
      
      <Footer />
    </div>
  )
}

export default Contact