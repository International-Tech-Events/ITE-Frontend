import TicketComponent from "./ticketComponent"

const MainTicket = () => {
  return (
    <div className="text-center my-24">
      <div className="mb-12">
        <h1 className="font-bold font-serif text-[24px] mb-2">TICKET PRICING</h1>
        <p className="font-serif text-gray-500">
          If you are looking at blank cassettes on the web, you may be very confused at the <br />
          difference in price. You may see some for as low as $.17 each.
        </p>
      </div>

      <div className="flex justify-center items-center text-justify gap-x-[3px] drop-shadow-lg">
        <TicketComponent
        title="BASIC"
        text1="Individuals"
        amount="£39"
        text2="RAM 1 GB"
        text3="Core CPU 1"
        text4="SSD Storage 20 GB"
        text5="Transfer 1 TB"
        text6="Network In 40 Gb" />

        <TicketComponent
        title="STARTER"
        text1="Group"
        amount="£59"
        text2="RAM 2 GB"
        text3="Core CPU 2"
        text4="SSD Storage 50 GB"
        text5="Transfer 1 TB"
        text6="Network In 40 Gb" />

        <TicketComponent
        title="BUSINESS"
        text1="Individual"
        amount="£79"
        text2="RAM 4 GB"
        text3="Core CPU 4"
        text4="SSD Storage 75 GB"
        text5="Transfer 2 TB"
        text6="Network In 80 Gb" />

      <TicketComponent
        title="ENTERPRISE"
        text1="Group"
        amount="£99"
        text2="RAM 8 GB"
        text3="Core CPU 8"
        text4="SSD Storage 100 GB"
        text5="Transfer 2 TB"
        text6="Network In 100 Gb" />
        
      </div>
    </div>
  )
}

export default MainTicket;