const Item = ({ description, quantity, id, packed, done, deleteItem }) => {
  const hadnleDoneItem = (id) => {
    done(id);
  };

  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => hadnleDoneItem(id)}
        checked={packed}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => deleteItem(id)}>❌&times;</button>
    </li>
  );
};

export default Item;
