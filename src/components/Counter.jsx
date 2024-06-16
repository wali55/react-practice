import { useState } from "react";
import { Button } from "@mui/material";

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <Button
        variant="contained"
        onClick={() => {
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        Plus Three
      </Button>
    </div>
  );
};

export default Counter;
