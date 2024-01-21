import Item from "./Item";

const PackingList = ({ items, done }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} {...item} done={done} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
