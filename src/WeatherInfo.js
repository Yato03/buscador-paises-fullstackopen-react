import { useState, useEffect } from "react";
import { getWeather } from "./services/getWeather";

export const WeatherInfo = (country) => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  //console.log("tipo:", typeof weather);
  useEffect(() => {
    setLoading(true);
    getWeather(country.name.common)
      .then((res) => {
        setWeather({
          temp: res.current.temp_c,
          icon: res.current.condition.icon,
          icon_text: res.current.condition.text,
          wind_mph: res.current.wind_mph,
          wind_dir: res.current.wind_dir
        });
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {loading === false ? (
        <div>
          <h2>Weather</h2>
          <p>
            <b>temperature:</b> {weather.temp} Cº
          </p>
          <img className="clima" src={weather.icon} alt={weather.icon_text} />
          <p>
            <b>wind:</b> {weather.wind_mph} mph direction {weather.wind_dir}
          </p>
        </div>
      ) : (
        "Cargando..."
      )}
    </div>
  );
};
