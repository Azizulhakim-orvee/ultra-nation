import { useEffect, useState } from "react";
import "./App.css";
import Country from "./Components/Country/Country";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(data => data.json())
    .then(data => setCountries(data))
    .catch(error => error)
  },[] )

  return (
    <div className="App">
      <ul>
        {
          countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
