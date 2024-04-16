import React, { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    //form validation
    if (!name) return;

    const newItem = { name, quantity, id: Date.now(), isChecked: false };
    console.log(newItem);

    setName("");
    setQuantity(1);
    onAddItem(newItem);
  }

  return (
    <div className="form-container">
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <select
            className="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 30 }, (_, index) => index + 1).map(
              (number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              )
            )}
          </select>
          <input
            className="add-item"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Add an item..."
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
