import { useState } from "react";

function Form({ onAddItems }) {
  const [qty, setQty] = useState(1);
  const [item, setItem] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    if (!item) return;
    const newItem = {
      description: item,
      quantity: qty,
      packed: false,
      id: Date.now(),
    };
    onAddItems(newItem);
    setItem("");
    setQty(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
