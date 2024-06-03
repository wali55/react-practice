const Item = ({ name, isPacked }) => {
  let itemContent = name;
  if (isPacked) {
    itemContent = <del>{name + " ✔"}</del>;
  }
  return <li className="item">{itemContent}</li>;
};

const PackingList = () => {
  return (
    <div>
      <h1>My Packing List</h1>
      <Item name="Bottle" isPacked={true} />
      <Item name="Shirt" isPacked={true} />
      <Item name="Mobile" isPacked={false} />
    </div>
  );
};

export default PackingList;
