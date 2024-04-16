import React from "react";
import Item from "./Item";
// import Entry from "./Item";

function ItemList({ items, onDeleteItem, onCheckedItem }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          onDelete={onDeleteItem}
          onCheckedItem={onCheckedItem}
        />
      ))}
    </ul>
  );
}

export default ItemList;

