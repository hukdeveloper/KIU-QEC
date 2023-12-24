"use client";

import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={50}
      mt={"auto"}
    >
      <Typography variant="subtitle2">Copyright KIU QEC - 2023</Typography>
    </Box>
  );
};

export default Footer;
