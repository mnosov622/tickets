import React, { useState } from "react";
import "./Filters.css";

const Filters = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("RUB");
  const [selectedStops, setSelectedStops] = useState<string[]>([]);

  const handleCurrencyClick = (currency: string) => {
    setSelectedCurrency(currency);
  };

  const handleStopsClick = (stop: string) => {
    if (selectedStops.includes(stop)) {
      setSelectedStops(selectedStops.filter((s) => s !== stop));
    } else {
      setSelectedStops([...selectedStops, stop]);
    }
  };

  const isStopSelected = (stop: string) => selectedStops.includes(stop);

  return (
    <section className="filters">
      <div className="currency">
        <h3>Валюта</h3>
        <div className="currency-buttons">
          <button
            className={`currency-button ${selectedCurrency === "RUB" ? "blue" : ""}`}
            onClick={() => handleCurrencyClick("RUB")}
          >
            RUB
          </button>
          <button
            className={`currency-button ${selectedCurrency === "USD" ? "blue" : ""}`}
            onClick={() => handleCurrencyClick("USD")}
          >
            USD
          </button>
          <button
            className={`currency-button ${selectedCurrency === "EUR" ? "blue" : ""}`}
            onClick={() => handleCurrencyClick("EUR")}
          >
            EUR
          </button>
        </div>
      </div>

      <div className="stops">
        <h3>Количество пересадок</h3>
        <div className="stops-buttons">
          <button
            className={`stops-button ${isStopSelected("Все") ? "checked" : ""}`}
            onClick={() => handleStopsClick("Все")}
          >
            <div className={`stops-checkbox ${isStopSelected("Все") ? "checked" : ""}`}>
              {isStopSelected("Все") && <span className="stops-checkbox-icon">✓</span>}
            </div>
            Все
          </button>
          <button
            className={`stops-button ${isStopSelected("Без пересадок") ? "checked" : ""}`}
            onClick={() => handleStopsClick("Без пересадок")}
          >
            <div className={`stops-checkbox ${isStopSelected("Без пересадок") ? "checked" : ""}`}>
              {isStopSelected("Без пересадок") && <span className="stops-checkbox-icon">✓</span>}
            </div>
            Без пересадок
          </button>
          <button
            className={`stops-button ${isStopSelected("1 пересадка") ? "checked" : ""}`}
            onClick={() => handleStopsClick("1 пересадка")}
          >
            <div className={`stops-checkbox ${isStopSelected("1 пересадка") ? "checked" : ""}`}>
              {isStopSelected("1 пересадка") && <span className="stops-checkbox-icon">✓</span>}
            </div>
            1 пересадка
          </button>
          <button
            className={`stops-button ${isStopSelected("2 пересадки") ? "checked" : ""}`}
            onClick={() => handleStopsClick("2 пересадки")}
          >
            <div className={`stops-checkbox ${isStopSelected("2 пересадки") ? "checked" : ""}`}>
              {isStopSelected("2 пересадки") && <span className="stops-checkbox-icon">✓</span>}
            </div>
            2 пересадки
          </button>
          <button
            className={`stops-button ${isStopSelected("3 пересадки") ? "checked" : ""}`}
            onClick={() => handleStopsClick("3 пересадки")}
          >
            <div className={`stops-checkbox ${isStopSelected("3 пересадки") ? "checked" : ""}`}>
              {isStopSelected("3 пересадки") && <span className="stops-checkbox-icon">✓</span>}
            </div>
            3 пересадки
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filters;
