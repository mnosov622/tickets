import React, { useState } from "react";
import "./Filters.css";

const Filters = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("RUB");

  const handleCurrencyClick = (currency: string) => {
    setSelectedCurrency(currency);
  };

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
          <div />
        </div>
      </div>
    </section>
  );
};

export default Filters;
