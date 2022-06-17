import "./styles.css";
import { useState, useEffect } from "react";
import { getCountries } from "./services/getCountries";
import { Countries } from "./Countries";

export default function App() {
  const [newCountry, setCountry] = useState("");
  const [countryList, setCountryList] = useState([]);

  const handleOnChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  //cargamos los paises
  useEffect(() => {
    getCountries()
      .then((json) => {
        setCountryList(json);
      })
      .catch((e) => console.log(e));
    console.log(countryList);
  }, []);

  return (
    <div className="App">
      <form>
        <label>Busca paises </label>
        <input
          type="text"
          value={newCountry}
          onChange={handleOnChangeCountry}
        />
      </form>
      <Countries filter={newCountry} countryList={countryList} />
    </div>
  );
}
