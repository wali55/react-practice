const Click = () => {
  return (
    <div>
      <button
        onClick={() => alert("Hello World")}
        className="border px-3 py-2 rounded bg-orange-300"
      >
        Click the Button
      </button>
    </div>
  );
};

export default Click;
