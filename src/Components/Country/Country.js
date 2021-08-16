import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  const { name, area, flag, region } = country;
  return (
    <div className="country">
      <div className="details">
        <h4>Name: {name}</h4>
        <h5>Area: {area}</h5>
        <h5>Region: {region}</h5>
      </div>
      <div>
        <img src={flag} alt="" />
      </div>
    </div>
  );
};

export default Country;
