"use client";

import {
  Apartment,
  LocalLibrary,
  People,
  Workspaces,
} from "@mui/icons-material";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const HomeCards = () => {
  const theme = useTheme();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.post("/api/performance", { campus: "Main" });
      setData(res.data);
    };
    getData();
  }, []);

  console.log(data);
  return (
    <Box
      display="flex"
      gap={2}
      flexWrap={"wrap"}
      sx={{
        ".MuiPaper-root": {
          width: 170,
          height: 170,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Paper elevation={5}>
        <Apartment
          sx={{
            fontSize: 40,
          }}
        />

        <Typography variant="body1" fontSize={22} fontWeight={700}>
          Departments
        </Typography>
        <Typography
          fontSize={18}
          variant="body1"
          textAlign={"center"}
          fontWeight={700}
        >
          {data && data.totalDepartments}
        </Typography>
      </Paper>
      <Paper elevation={5}>
        <People
          sx={{
            fontSize: 40,
          }}
        />

        <Typography variant="body1" fontSize={22} fontWeight={700}>
          Teachers
        </Typography>
        <Typography
          fontSize={18}
          variant="body1"
          textAlign={"center"}
          fontWeight={700}
        >
          {data && data.totalTeachers}
        </Typography>
      </Paper>
      <Paper elevation={5}>
        <Workspaces
          sx={{
            fontSize: 40,
          }}
        />

        <Typography variant="body1" fontSize={22} fontWeight={700}>
          Programs
        </Typography>
        <Typography
          fontSize={18}
          variant="body1"
          textAlign={"center"}
          fontWeight={700}
        >
          45
        </Typography>
      </Paper>
      <Paper elevation={5}>
        <LocalLibrary
          sx={{
            fontSize: 40,
          }}
        />

        <Typography variant="body1" fontSize={22} fontWeight={700}>
          Subjects
        </Typography>
        <Typography
          fontSize={18}
          variant="body1"
          textAlign={"center"}
          fontWeight={700}
        >
          {data && data.totalSubjects}
        </Typography>
      </Paper>
    </Box>
  );
};

export default HomeCards;
