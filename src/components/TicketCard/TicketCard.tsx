import "./TicketCard.css";
import TurkishAirlines from "../../assets/turkish-airlines.png";
import S7 from "../../assets/s7.png";
import Aeroflot from "../../assets/aeroflot.png";
import BritishAirways from "../../assets/british-airways.png";

import TravelTime from "../../assets/travel-time.png";
import { formatDate, getTransfersDeclension } from "../../utils/utils";

interface TicketCardProps {
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
  currencySymbol: string;
}

const TicketCard = ({
  origin,
  origin_name,
  destination,
  destination_name,
  departure_date,
  departure_time,
  arrival_date,
  arrival_time,
  carrier,
  stops,
  price,
  currencySymbol,
}: TicketCardProps) => {
  const formattedDepartureDate = formatDate(departure_date);
  const formattedArrivalDate = formatDate(arrival_date);

  return (
    <section className="ticket-card">
      <div className="ticket-card-header">
        {carrier === "S7" && <img src={S7} alt="s7" width={100} height={30} />}
        {carrier === "TK" && (
          <img src={TurkishAirlines} alt="turkish airlines" width={100} height={30} />
        )}
        {carrier === "SU" && <img src={Aeroflot} alt="aeroflot" width={100} height={30} />}
        {carrier === "BA" && (
          <img src={BritishAirways} alt="british airways" width={100} height={30} />
        )}
        <button className="ticket-card-buy-button">
          Купить <br />
          за {Math.round(price)} {currencySymbol}
        </button>
      </div>
      <div className="ticket-card-body">
        <div className="ticket-time">
          <div className="ticket-time-departure">
            <div className="ticket-time-departure-time">{departure_time}</div>
            <div className="ticket-time-departure-place">
              {origin}, {origin_name}
            </div>
            <div className="ticket-time-departure-date">{formattedDepartureDate}</div>
          </div>
        </div>
        <div className="ticket-time">
          <div className="ticket-time-travel-time">
            <div className="ticket-stops">
              <span>
                {stops} {getTransfersDeclension(stops)}
              </span>
            </div>
            <div className="plane-travel-wrapper">
              <img className="plane-travel" src={TravelTime} alt="travel" width={20} height={20} />
            </div>
            <div className="travel-time-line"></div>
          </div>
        </div>

        <div className="ticket-time">
          <div className="ticket-time-arrival">
            <div className="ticket-time-arrival-time">{arrival_time}</div>
            <div className="ticket-time-arrival-place">
              {destination}, {destination_name}
            </div>
            <div className="ticket-time-arrival-date">{formattedArrivalDate}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketCard;
