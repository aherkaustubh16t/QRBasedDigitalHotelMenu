function MenuItem({ item }) {
  return (
    <div className="border p-4 my-2">
      <p>
        <strong>{item.name}</strong> - ${item.price}
      </p>
    </div>
  );
}

export default MenuItem;
