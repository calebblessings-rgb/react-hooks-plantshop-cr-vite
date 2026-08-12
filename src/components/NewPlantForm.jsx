import React from "react";

function NewPlantForm({ addPlant }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget || (event.target && event.target.closest ? event.target.closest('form') : null);
    if (!form) return;
    const nameInput = form.querySelector('[name="name"]')
    const imageInput = form.querySelector('[name="image"]')
    const priceInput = form.querySelector('[name="price"]')
    const newPlant = {
      name: nameInput ? nameInput.value : '',
      image: imageInput ? imageInput.value : '',
      price: priceInput ? priceInput.value : '',
    };
    addPlant(newPlant);
    form.reset();
  };
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
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
