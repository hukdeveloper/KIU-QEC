"use client";
import { Box } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const PieChart = ({ data }) => {
  return (
    <Box height={400}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        colors={(bar) => {
          // Map colors based on the bar's id
          const colorMap = {
            stronglyDisagree: "#E50404", // Dark Red
            disagree: "#FF5858", // Light Red
            agree: "#04B704", // Light Green
            stronglyAgree: "#006400", // Dark Green
          };
          return colorMap[bar.id];
        }}
        indexBy="id"
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 65,
            itemsSpacing: 0,
            itemWidth: 120,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
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

export default PieChart;
