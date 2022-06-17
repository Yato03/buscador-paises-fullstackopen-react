import { Country } from "./Country";
import { CountryInfo } from "./CountryInfo";

export const Countries = ({ filter, countryList }) => {
  //filtrado
  const countryListFiltered = countryList.filter((element) => {
    let el = element.name.common;
    let fil = filter.toUpperCase();

    return el.toUpperCase().includes(fil);
  });
  //SI SOLO HAY UN SOLO ELEMENTO
  if (countryListFiltered.length === 1) {
    const country = countryListFiltered[0];
    return <CountryInfo {...country} />;
  }
  //SI HAY MENOS DE 10 ELEMENTOS
  else if (countryListFiltered.length <= 10) {
    const lista = countryListFiltered.map((element) => (
      <Country {...element} key={element.name.official} />
    ));
    return <div>{lista}</div>;
  }
  //SI HAY MAS DE 10 ELEMENTOS
  else return <p>Demasiados resultados</p>;
};
