import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [countryAdd, setCountyAdd] = useState([]);
  function addThisToList(countryInfo) {
    // console.log(countryInfo.name.common);
    setCountyAdd([...countryAdd, countryInfo]);
  }

  return (
    <>
      <h1
        style={{
          margin: "40px 0px",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Country list {countryAdd.length}
      </h1>
      <ul>
        <h2>visted country list {countryAdd.length}</h2>
        {countryAdd.map((country) => (
          <p key={country.cca3}>{country.name.common} ({country.flag})</p>
        ))}
      </ul>
      <div className="main-div">
        {countries.slice(0, 10).map((country) => (
          <Country
            key={country.cca3}
            addThisToList={addThisToList}
            data={country}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
