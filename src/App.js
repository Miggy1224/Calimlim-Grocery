import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import ItemList from "./Components/ItemList";
import Footer from "./Components/Footer";

function App() {
  const [items, setItems] = useState([
    { id: 1, quantity: "2", name: "Milk", isChecked: false },
    { id: 2, quantity: "2", name: "Coffee", isChecked: false },
    { id: 3, quantity: "4", name: "Sugar", isChecked: false },
  ]);

  const [sortBy, setSortBy] = useState("input");

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckedItems = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleClearList = () => {
    if (window.confirm("Are you sure you want to clear?")) {
      setItems([]);
    }
  };

  let sortedItems = items;
  if (sortBy === "name") {
    sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "checked") {
    sortedItems = [...items].sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
  }

  return (
    <div className="container">
      <Header />
      <Form onAddItem={handleAddItem} />
      <ItemList
        items={sortedItems}
        onDeleteItem={handleDeleteItem}
        onCheckedItem={handleCheckedItems}
      />
      <button onClick={handleClearList}>Clear</button>
      <br />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by Input</option>
        <option value="name">Sort by name</option>
        <option value="checked">Sort by check status order</option>
      </select>
      <Footer items={items} />
    </div>
  );
}

export default App;