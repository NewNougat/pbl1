import { Container } from "@mui/material";
import React, { useState } from "react";
import ListFilter from "./components/ListFilter";
import ReusableButton from "./components/ReusableButton";

const App = () => {
  const [numbers, setNumbers] = useState(
    Array.from({ length: 100 }, (_, i) => i + 1)
  );

  const handleAll = () => {
    setNumbers(Array.from({ length: 100 }, (_, i) => i + 1));
  };

  const handleOdd = () => {
    setNumbers(numbers.filter((num) => num % 2 !== 0));
  };

  const handleEven = () => {
    const number = numbers.filter((num) => num % 2 === 0);
    setNumbers(number);
  };

  const buttons = [
    {
      children: "All",
      color: "success",
      event: handleAll,
      variant: "contained",
    },
    {
      children: "Odd",
      color: "primary",
      event: handleOdd,
      variant: "contained",
    },
    {
      children: "Even",
      color: "error",
      event: handleEven,
      variant: "contained",
    },
  ];

  return (
    <Container>
      {buttons.map((button) => (
        <ReusableButton
          key={button.children}
          color={button.color}
          variant={button.variant}
          onClick={() => button.event()}
        >
          {button.children}
        </ReusableButton>
      ))}
      <ListFilter numbers={numbers} />
    </Container>
  );
};

export default App;
