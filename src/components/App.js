import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import Stats from "./Stats";
import PackingList from "./PackingList";

function App() {
  const [items, setItems] = useState([]);

  //Add item into list
  function handleAddItems(item) {
    console.log(item);
    setItems((items) => [...items, item]);
  }

  //Delete item from the list
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  //Check item from list
  function handleCheckItem(id) {
    console.log(id);
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  //Clear list
  function handleClear() {
    const is_confirm = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (is_confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        handleCheck={handleCheckItem}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
