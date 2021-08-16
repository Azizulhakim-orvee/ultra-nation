import { useEffect, useState } from "react";
import "./App.css";
import Country from "./Components/Country/Country";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((data) => data.json())
      .then((data) => setCountries(data))
      .catch((error) => error);
  }, []);
  const [cart, setCart] = useState([])
  const [name, setName] = useState([])
  const [population, setPopulation] = useState([])

  const handleAddCountry = (country) => {
      const newName = country.name;
      const newPopulation = country.population;
      const newCart = [...cart, country] 
      setPopulation(newPopulation)
      setCart(newCart)
      setName(newName)
    }

    const totalPopulation = cart.reduce((total, cart) => total+cart.population,0)



  return (
    <>
    <div className="navbar">
      <h4>Country Added: {cart.length}</h4>
      <p>Last Added: {name} {population} </p>
      <h4>Total population: {totalPopulation} </h4>
    </div>
    
    <div className="App">
      <ul>
        {countries.map((country) => (
          <Country country={country} cart={cart} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App;
