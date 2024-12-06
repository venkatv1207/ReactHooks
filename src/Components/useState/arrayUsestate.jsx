import { useState } from "react";

function ArrayUSestate() {
  const [items, setItems] = useState([]);

  // Add a new item to the array
  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  // Remove the last item from the array
  const removeItem = () => {
    setItems(items.slice(0, -1));
  };

  return (
    <div>
      <h3>Array Items</h3>
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem} disabled={items.length === 0}>
        Remove Item
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default ArrayUSestate;
