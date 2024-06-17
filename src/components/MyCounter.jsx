import { useState } from "react";
import { Button } from "@mui/material";

const MyCounter = () => {
  const [counter, setCounter] = useState([0, 0, 0]);

  const handleClick = (index) => {
    const newCounter = counter.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounter(newCounter);
  };
  return (
    <div>
      {counter.map((c, index) => (
        <ul>
          <li key={index}>
            {c}{" "}
            <Button
              onClick={() => handleClick(index)}
              variant="contained"
              sx={{ marginY: "10px" }}
            >
              +1
            </Button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MyCounter;
