import { useState } from "react";

const Form = ({ save }) => {
  const [text, setText] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [id, setId] = useState(4);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setId(id + 1);

    save({
      id: id,
      description: text,
      quantity: quantity,
      packed: false,
    });
    setText("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handlerSubmit}>
      <h3>Ehat do you neew for yuor trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Item.."
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default Form;
