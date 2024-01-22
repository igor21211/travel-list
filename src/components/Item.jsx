const Item = ({ description, quantity, id, packed, done, deleteItem }) => {
  const hadnleDoneItem = (id) => {
    done(id);
  };

  return (
    <li>
      <span
        onClick={() => hadnleDoneItem(id)}
        style={packed ? { textDecoration: "line-through" } : {}}
      >
        {quantity} {description}
      </span>
      <button onClick={() => deleteItem(id)}>❌&times;</button>
    </li>
  );
};

export default Item;
