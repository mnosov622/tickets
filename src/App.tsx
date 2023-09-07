import Plane from "./assets/plane.png";
import Filters from "./components/Filters/Filters";
import TicketCard from "./components/TicketCard/TicketCard";
import "./App.css";
import tickets from "./fake-data/tickets.json";
import { useState, useEffect } from "react";
import { Ticket } from "./interfaces/ticket";

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

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
  };

  useEffect(() => {
    if (selectedStops.length === 0) {
      setTicketsToShow(tickets.tickets);
    } else if (selectedStops.includes("All")) {
      setTicketsToShow((prev) => tickets.tickets.filter((ticket) => ticket.stops >= 0));
    } else {
      setTicketsToShow((prev) =>
        tickets.tickets.filter((ticket) => selectedStops.includes(String(ticket.stops)))
      );
    }
  }, [selectedStops]);

  useEffect(() => {}, [selectedCurrency]);

  return (
    <section>
      <section className="img-container">
        <img src={Plane} alt="plane" width={50} height={50} />
      </section>
      <main className="main">
        <Filters
          handleStopsChange={handleStopsChange}
          handleCurrencyChange={handleCurrencyChange}
        />
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
