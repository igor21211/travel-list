const Item = ({ description, quantity, id, packed, done }) => {
  const hadnleDoneItem = (id) => {
    done(id);
  };

  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => hadnleDoneItem(id)}>❌&times;</button>
    </li>
  );
};

export default Item;
