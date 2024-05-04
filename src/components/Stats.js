function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const finished = items.filter((item) => item.packed).length;
  const percentage = Math.round((finished / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        💼 You have {numItems} items on your list, and you already packed{" "}
        {finished} ({percentage}%)
      </em>
    </footer>
  );
}

export default Stats;
