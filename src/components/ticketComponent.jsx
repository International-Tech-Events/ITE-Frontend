const TicketComponent = ({ title, price, features }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-purple-500 p-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="p-4">
        <h3 className="text-4xl font-bold text-purple-500">{price}</h3>
        <ul className="mt-4 text-gray-700 list-none space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mt-2 space-y-1">
              <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 bg-gray-100 text-center">
        <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
          Buy Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketComponent;
