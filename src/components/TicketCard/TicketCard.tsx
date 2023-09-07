import "./TicketCard.css";
import TurkishAirlines from "../../assets/turkish-airlines.png";

const TicketCard = () => {
  return (
    <section className="ticket-card">
      <div className="ticket-card-header">
        <img src={TurkishAirlines} alt="turkish airlines" width={100} height={30} />
        <button className="ticket-card-buy-button">
          Купить <br />
          за 21 032 ₽
        </button>
      </div>
      <div className="ticket-card-body">
        <div className="ticket-time">21</div>
      </div>
    </section>
  );
};

export default TicketCard;
