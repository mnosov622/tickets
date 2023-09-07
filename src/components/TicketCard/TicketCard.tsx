import "./TicketCard.css";
import TurkishAirlines from "../../assets/turkish-airlines.png";
import TravelTime from "../../assets/travel-time.png";

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
        <div className="ticket-time">
          <div className="ticket-time-departure">
            <div className="ticket-time-departure-time">10:45</div>
            <div className="ticket-time-departure-place">MOW, Шереметьево</div>
            <div className="ticket-time-departure-date">12 авг 2020, Ср</div>
          </div>
        </div>
        <div className="ticket-time">
          <div className="ticket-time-travel-time">
            <div className="ticket-stops">
              <span>1 пересадка</span>
            </div>
            <div className="plane-travel-wrapper">
              <img className="plane-travel" src={TravelTime} alt="travel" width={20} height={20} />
            </div>
            <div className="travel-time-line"></div>
          </div>
        </div>

        <div className="ticket-time">
          <div className="ticket-time-arrival">
            <div className="ticket-time-arrival-time">08:00</div>
            <div className="ticket-time-arrival-place">HKT, Пхукет</div>
            <div className="ticket-time-arrival-date">12 авг 2020, Ср</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketCard;
