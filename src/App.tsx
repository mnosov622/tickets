import Plane from "./assets/plane.png";
import Filters from "./components/Filters/Filters";
import TicketCard from "./components/TicketCard/TicketCard";
import "./App.css";
import tickets from "./fake-data/tickets.json";

const App = () => {
  return (
    <section>
      <section className="img-container">
        <img src={Plane} alt="plane" width={50} height={50} />
      </section>
      <main className="main">
        <Filters />
        <section className="tickets">
          {tickets.tickets.map((ticket, index) => (
            <TicketCard
              key={index}
              origin={ticket.origin}
              origin_name={ticket.origin_name}
              destination={ticket.destination}
              destination_name={ticket.destination_name}
              departure_date={ticket.departure_date}
              departure_time={ticket.departure_time}
              arrival_date={ticket.arrival_date}
              arrival_time={ticket.arrival_time}
              carrier={ticket.carrier}
              stops={ticket.stops}
              price={ticket.price}
            />
          ))}
        </section>
      </main>
    </section>
  );
};

export default App;
