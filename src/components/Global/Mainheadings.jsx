"use client";

import { Stack, Typography, useTheme } from "@mui/material";

const Mainheadings = ({ title, desc }) => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        bgcolor: theme.palette.grey[600],
        p: 1,
      }}
    >
      <Typography variant="body1" fontSize={20} fontWeight={700}>
        {title}
      </Typography>
      <Typography variant="subtitle2" fontWeight={500}>
        {desc}
      </Typography>
    </Stack>
  );
};

export default Mainheadings;
