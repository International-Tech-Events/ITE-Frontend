import Footer from "../components/footer"
import HeroAll from "../components/heroAll"
import MainTicket from "../components/mainTicket"
import Navbar from "../components/navbar"

const Events = () => {
  return (
    <div>
      <Navbar />
      
      <HeroAll 
      text9="HOME"
      text10="EVENT"
      text11="Events"/>

      <MainTicket />

      <Footer />
    </div>
  )
}

export default Events