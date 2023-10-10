import { Button } from "@mui/material";
import React from "react";

const ReusableButton = ({ children, color, onClick, variant }) => {
  return (
    <Button onClick={onClick} color={color} variant={variant}>
      {children}
    </Button>
  );
};

export default ReusableButton;
