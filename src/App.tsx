import Plane from "./assets/plane.png";
import Filters from "./components/Filters/Filters";
import TicketCard from "./components/TicketCard/TicketCard";
import "./App.css";
import tickets from "./fake-data/tickets.json";
import { useState, useEffect } from "react";

interface Ticket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("RUB");
  const [selectedStops, setSelectedStops] = useState<string[]>([]);
  const [ticketsToShow, setTicketsToShow] = useState<Ticket[]>(tickets.tickets);

  const handleStopsChange = (stop: string) => {
    if (selectedStops.includes(stop)) {
      setSelectedStops(selectedStops.filter((s) => s !== stop));
    } else {
      setSelectedStops([...selectedStops, stop]);
    }
  };

  useEffect(() => {
    if (selectedStops.length === 0) {
      setTicketsToShow(tickets.tickets);
    } else {
      setTicketsToShow((prev) =>
        tickets.tickets.filter((ticket) => selectedStops.includes(String(ticket.stops)))
      );
    }
  }, [selectedStops]);

  return (
    <section>
      <section className="img-container">
        <img src={Plane} alt="plane" width={50} height={50} />
      </section>
      <main className="main">
        <Filters handleStopsChange={handleStopsChange} />
        <section className="tickets">
          {ticketsToShow.map((ticket, index) => (
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
