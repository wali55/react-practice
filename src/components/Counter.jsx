import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button
        className="border py-2 px-3 bg-cyan-400 rounded-md"
        onClick={() => {
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
    </div>
  );
};

export default Counter;
