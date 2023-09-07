import Plane from "./assets/plane.png";
import TicketCard from "./components/TicketCard/TicketCard";

const App = () => {
  return (
    <section>
      <section className="img-container">
        <img src={Plane} alt="plane" />
      </section>

      <section className="filters"></section>

      <section>
        <TicketCard />
      </section>
    </section>
  );
};

export default App;
