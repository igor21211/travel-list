import Item from "./Item";

const PackingList = ({ items, done, deleteItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} {...item} done={done} deleteItem={deleteItem} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
