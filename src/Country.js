import { useState } from "react";
import { CountryInfo } from "./CountryInfo";

export const Country = (country) => {
  const [showInfo, setShowInfo] = useState("Mostrar");

  const handleClick = () => {
    setShowInfo((prev) => {
      if (prev.includes("Mostrar")) return "Esconder";
      return "Mostrar";
    });
  };

  return (
    <div className="country">
      <span>{country.name.common}</span>
      <button onClick={handleClick}>{showInfo}</button>
      {showInfo.includes("Esconder") ? (
        <div>
          <CountryInfo {...country} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
