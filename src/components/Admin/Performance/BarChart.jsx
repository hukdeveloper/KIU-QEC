"use client";

import { ResponsiveBar } from "@nivo/bar";

import { Box } from "@mui/material";

const BarChart = ({ data }) => {
  return (
    <Box height={500}>
      <ResponsiveBar
        data={data}
        groupMode="grouped"
        keys={["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"]}
        indexBy="quiz"
        margin={{ top: 50, right: 140, bottom: 60, left: 60 }}
        colors={(bar) => {
          // Map colors based on the bar's id
          const colorMap = {
            "Strongly Disagree": "#FF0303", // Dark Red
            Disagree: "#EB7676", // Light Red
            Agree: "#04B704", // Light Green
            "Strongly Agree": "#006400", // Dark Green
          };
          return colorMap[bar.id];
        }}
        padding={0.3}
        axisBottom={{
          tickRotation: -25,
          legend: "Questions",
          legendPosition: "middle",
          legendOffset: 50,
        }}
        axisLeft={{
          tickRotation: 0,
          legend: "Count",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemTextColor: "#000",
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default BarChart;
