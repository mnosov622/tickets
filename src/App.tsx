import Plane from "./assets/plane.png";
import Filters from "./components/Filters/Filters";
import TicketCard from "./components/TicketCard/TicketCard";
import "./App.css";
const App = () => {
  return (
    <section>
      <section className="img-container">
        <img src={Plane} alt="plane" />
      </section>
      <main className="main">
        <Filters />
        <TicketCard />
      </main>
    </section>
  );
};

export default App;
