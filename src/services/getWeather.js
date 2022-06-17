export const getWeather = (countryName) => {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${countryName}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "534972cf31msh9dfa3047f355576p182fc0jsnd1d2d4d12ed3",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
    }
  };

  return fetch(url, options).then((res) => res.json());
};
