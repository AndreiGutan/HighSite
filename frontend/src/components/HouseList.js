import React, { useState, useEffect } from "react";
import "./HouseList.css"; // or "./HouseList.scss" if using Sass

//Create the "HouseList" component and fetch the house data from your API
const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch("http://localhost:5000/houses");
        const data = await response.json();
        setHouses(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchHouses();
  }, []);

  return (
    <div className="house-list">
      <ul>
        {houses.map((house) => (
          <li key={house.id}>{house.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HouseList;
