import React from "react";
import {Link} from 'react-router-dom'

import "./navBar.css";

const NavBar = ({
  handleChange,
  handleFind,
  temperaments,
  origins,
  setSelectedTemperament,
  setSelectedOrigin,
  setSelectedSortDirection,
  setSelectedSortWeightDirection,
}) => {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTemperament(selectedValue);
  };

  const handleOriginChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOrigin(selectedValue);
  };

  const handleSortChange = (event) => {
    const selectedSortDirection = event.target.value;
    setSelectedSortDirection(selectedSortDirection);
  };
  
  const handleSortWeightChange = (event) => {
    const selectedSortWeightDirection = event.target.value;
    setSelectedSortWeightDirection(selectedSortWeightDirection);
  };

  return (
    <div className="search-container">
      <form action="" onChange={handleChange}>
        <input type="search" placeholder="Search" />

        <div className="filter-container">
          <select name="temperament" id="" onChange={handleSelectChange}>
            <option value="">Temperaments</option>
            {temperaments.map((temperament) => {
              return (
                <option key={temperament} value={temperament}>
                  {temperament}
                </option>
              );
            })}
          </select>

          <select name="origin" id="" onChange={handleOriginChange}>
            <option value="">Origins</option>
            {origins.map((origin) => {
              return (
                <option key={origin} value={origin}>
                  {origin}
                </option>
              );
            })}
          </select>

          <select name="sort" id="sort" onChange={handleSortChange}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>

          <select
            name="sortWeight"
            id="sortWeight"
            onChange={handleSortWeightChange}
          >
            <option value="">Sort by Weight</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        <Link className="button" to="/create">New Dog</Link>

      </form>
    </div>
  );
};

export default NavBar;
