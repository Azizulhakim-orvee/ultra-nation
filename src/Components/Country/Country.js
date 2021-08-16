import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleAddCountry, cart}) => {
  const { name, area, flag, region, population } = country;

  return (
      <>
    <div className="country">
      <div className="details">
        <h4>Name: {name}</h4>
        <h5>Population: {population}</h5>
        <h5>Area: {area}</h5>
        <h5>Region: {region}</h5>
        <button onClick={() => handleAddCountry(country)}>Add Population</button>
      </div>
      <div>
        <img src={flag} alt="" />
      </div>
    </div>
    </>
  );
};

export default Country;
