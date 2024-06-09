const Click = () => {
  function handleClick() {
    alert("Clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click the Button</button>
    </div>
  );
};

export default Click;
