const Stats = ({ items }) => {
  const filterItems = items.filter((i) => i.packed).length;

  return (
    <footer className="stats">
      <em>
        You have {items.length} items on your list, and you already packed{" "}
        {filterItems}
      </em>
    </footer>
  );
};

export default Stats;
