import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { initialItems } from "./data/data";

function App() {
  const [items, setItems] = useState(initialItems);

  const deleteAll = () => {
    setItems([]);
  };
  const saveNewItem = (item) => {
    setItems([...items, item]);
  };

  const doPacked = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Logo />
      <Form save={saveNewItem} />
      <PackingList
        deleteItem={deleteItem}
        done={doPacked}
        items={items}
        handlerSetItems={() => setItems}
        deleteAll={deleteAll}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
