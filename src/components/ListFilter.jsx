import { Box, Typography } from "@mui/material";
import React from "react";

const ListFilter = ({ numbers }) => {
  return (
    <Box>
      <Typography>
        {numbers.map((number) => (
          <span key={number}>{number} </span>
        ))}
      </Typography>
    </Box>
  );
};
export default ListFilter;
