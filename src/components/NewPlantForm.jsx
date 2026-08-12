import React from "react";

function NewPlantForm({ addPlant }) {
  const handleSumbit = (event) => {
    event.PreventDefault();
    const newPlant = {
      name: event.target.name.value,
      image: event.target.image.value,
      price: event.target.price.value,
    }
    addPlant(newPlant);
    event.target.reset();
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSumbit}>
        <input type="text"
         name="name" 
         placeholder="Plant name" />
        <input type="text"
         name="image"
          placeholder="Image URL" />
        <input type="number"
         name="price" 
         step="0.01" 
         placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
