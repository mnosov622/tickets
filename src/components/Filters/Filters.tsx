import React, { useState } from "react";
import "./Filters.css";

interface FiltersProps {
  handleStopsChange: (stop: string) => void;
}

const Filters = ({ handleStopsChange }: FiltersProps) => {
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
    handleStopsChange(stop);
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
            className={`stops-button ${isStopSelected("All") ? "checked" : ""}`}
            onClick={() => handleStopsClick("All")}
          >
            <div className={`stops-checkbox ${isStopSelected("All") ? "checked" : ""}`}>
              {isStopSelected("All") && <span className="stops-checkbox-icon">✓</span>}
            </div>
            Все
          </button>
          <button
            className={`stops-button ${isStopSelected("0") ? "checked" : ""}`}
            onClick={() => handleStopsClick("0")}
          >
            <div className={`stops-checkbox ${isStopSelected("0") ? "checked" : ""}`}>
              {isStopSelected("0") && <span className="stops-checkbox-icon">✓</span>}
            </div>
            Без пересадок
          </button>
          <button
            className={`stops-button ${isStopSelected("1") ? "checked" : ""}`}
            onClick={() => handleStopsClick("1")}
          >
            <div className={`stops-checkbox ${isStopSelected("1") ? "checked" : ""}`}>
              {isStopSelected("1") && <span className="stops-checkbox-icon">✓</span>}
            </div>
            1 пересадка
          </button>
          <button
            className={`stops-button ${isStopSelected("2") ? "checked" : ""}`}
            onClick={() => handleStopsClick("2")}
          >
            <div className={`stops-checkbox ${isStopSelected("2") ? "checked" : ""}`}>
              {isStopSelected("2") && <span className="stops-checkbox-icon">✓</span>}
            </div>
            2 пересадки
          </button>
          <button
            className={`stops-button ${isStopSelected("3") ? "checked" : ""}`}
            onClick={() => handleStopsClick("3")}
          >
            <div className={`stops-checkbox ${isStopSelected("3") ? "checked" : ""}`}>
              {isStopSelected("3") && <span className="stops-checkbox-icon">✓</span>}
            </div>
            3 пересадки
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filters;
