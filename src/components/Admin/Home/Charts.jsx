"use client";

import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ContextProvider";

const Charts = () => {
  const theme = useTheme();

  const [dept, setDept] = useState("");

  useEffect(() => {
    const getDepartment = async () => {
      const res = await axios.get("/api/department");
      setDept(res.data);
    };
    getDepartment();
  }, []);

  // Define color schemes for light and dark modes
  const lightModeColors = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
    "#aec7e8",
    "#ffbb78",
    "#98df8a",
    "#ff9896",
    "#c5b0d5",
    "#c49c94",
    "#f7b6d2",
    "#c7c7c7",
    "#dbdb8d",
    "#9edae5",
    "#393b79",
    "#637939",
    "#8c6d31",
  ];

  const darkModeColors = [
    "#ff7f0e",
    "#1f77b4",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
    "#aec7e8",
    "#ffbb78",
    "#98df8a",
    "#ff9896",
    "#c5b0d5",
    "#c49c94",
    "#f7b6d2",
    "#c7c7c7",
    "#dbdb8d",
    "#9edae5",
    "#393b79",
    "#637939",
    "#8c6d31",
  ];

  const colors = theme.mode === "light" ? lightModeColors : darkModeColors;

  return (
    <>
      {dept ? (
        <Box height={800} width={"auto"}>
          <ResponsiveBar
            data={dept}
            keys={["averageScore"]}
            indexBy="name"
            margin={{ top: 30, right: 130, bottom: 170, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={(bar) => colors[bar.index % colors.length]}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisTop={null}
            theme={{
              axis: {
                legend: {
                  text: {
                    fill: theme.palette.info.dark,
                  },
                },
                ticks: {
                  text: {
                    fill: theme.palette.text.primary,
                  },
                },
              },
              tooltip: {
                container: {
                  color: theme.palette.background.paper,
                  backgroundColor: theme.palette.text.primary,
                },
              },
            }}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 45,
              legend: "Departments",
              legendPosition: "middle",
              legendOffset: 162,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Average Score",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            // labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            labelTextColor={theme.palette.background.paper}
          />
        </Box>
      ) : (
        <>loading....</>
      )}
    </>
  );
};

export default Charts;
