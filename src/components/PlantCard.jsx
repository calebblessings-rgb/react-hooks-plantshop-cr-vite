import React from "react";
import { useState } from "react";

function PlantCard({ plant }) {
  const [SoldOut, setSoldOut] = useState(false);

  const handleSumbit = () => {
    setSoldOut(!SoldOut);
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} 
      alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      
      {soldOut ? (
        <button>Out of Stock</button>
        ) : (
        <button
          className="primary"
          onClick={handleClick}
        >
          In Stock
        </button>
      )}
    </li>
  );
}
 
export default PlantCard;
