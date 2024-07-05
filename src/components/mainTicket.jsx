import Ticket from './ticketComponent';

const MainTicket = () => {
  const ticketData = [
    {
      title: 'BASIC',
      price: '£39',
      features: [
        'Individual Access',
        'Access to Keynote Sessions',
        'Entry to Exhibition Hall',
        'Access to Networking Events',
        'Standard Seating',
        'Conference Materials',
      ],
    },
    {
      title: 'STARTER',
      price: '£59',
      features: [
        'Group Access',
        'Access to Keynote Sessions',
        'Entry to Exhibition Hall',
        'Access to Networking Events',
        'Standard Seating',
        'Workshop Participation',
      ],
    },
    {
      title: 'BUSINESS',
      price: '£79',
      features: [
        'Individual Premium',
        'All Basic Features',
        'Reserved Seating',
        'VIP Networking Events',
        'Exclusive Workshops',
        'Premium Conference Materials',
      ],
    },
    {
      title: 'ENTERPRISE',
      price: '£99',
      features: [
        'Group Premium',
        'All Starter Features',
        'Reserved Seating',
        'VIP Networking Events',
        'Exclusive Workshops',
        'Personalized Support',
      ],
    },
  ];

  return (
    <div className="text-center my-24">
      <div className="mb-12">
        <h1 className="font-bold font-serif text-[28px] mb-2">
          TICKET PRICING
        </h1>
        <p className="font-serif text-gray-500 text-[16px]">
          Join the International Tech Event and choose the ticket that best
          suits your needs. Whether you're an <br />
          individual or part of a group, we have the right option for you.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {ticketData.map((ticket, index) => (
          <Ticket
            key={index}
            title={ticket.title}
            price={ticket.price}
            features={ticket.features}
          />
        ))}
      </div>
    </div>
  );
};

export default MainTicket;
