import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import City from "../interfaces/city.interface";


const Navbar: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);

  

  useEffect(() => {
    const getCityCount = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/patient/countcity"
    );
    const jsonData = await response.json();
    console.log(jsonData);
    
    setCities(jsonData);
  };
    getCityCount();
  }, []);
  return (
    <>
      <ul id="dropdown1" className="dropdown-content">
        {cities &&
          !!cities.length &&
          cities.map((city) => {
            return (
              <li key={city.cityName}>
                <Link to={`/patients/${city.cityName}`}>
                  {city.cityName} ({city.count})
                </Link>
              </li>
            );
          })}
      </ul>
      <ul id="dropdown" className="dropdown-content">
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/patients/male">Male</Link>
        </li>
        <li className="divider"></li>
        <li>
          <Link to="/patients/female">Female</Link>
        </li>
      </ul>
      <nav>
        <div className="nav-wrapper blue-grey darken-2">
          <Link to="/" className="brand-logo" style={{ marginLeft: "1rem" }}>
            Journalify
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                City<i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            <li>
              <a className="dropdown-trigger" href="#!" data-target="dropdown">
                Filter<i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
