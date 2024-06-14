const Button = ({onClick, children}) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="px-3 py-2 bg-cyan-500 mr-2"
    >{children}</button>
  );
};

const Propagation = () => {
  return (
    <div className="border p-2" onClick={() => alert("div Clicked")}>
      <Button onClick={() => alert("play Clicked")}>Play</Button>
      <Button onClick={() => alert("upload clicked")}>Upload</Button>
    </div>
  );
};

export default Propagation;
