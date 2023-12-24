"use client";

import { Typography } from "@mui/material";

const Subheading = ({ title }) => {
  return (
    <Typography variant="h6" textAlign={"center"} fontWeight={700}>
      {title}
    </Typography>
  );
};

export default Subheading;
