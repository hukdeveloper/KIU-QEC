"use client";

import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { Box, IconButton, Tab, Tabs, Typography } from "@mui/material";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { Dashboard } from "@mui/icons-material";
import ChartModal from "./ChartModal";

const SubjectVise = ({ campus, department, teacher, subject }) => {
  const [quizScore, setQuizScore] = useState(null);
  const [chartTab, setChartTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setChartTab(newValue);
  };

  const getQuizScore = async () => {
    try {
      const data = {
        campus,
        teacher,
        department,
        subject,
      };
      const res = await axios.post("/api/teacher/reviews", data);
      setQuizScore(res.data);
    } catch (error) {
      alert(`${error}`);
    }
  };
  const getTotalScore = () => {
    let quizsScore = {
      "Strongly Disagree": 0,
      Agree: 0,
      Disagree: 0,
    };
    let sda = 0;
    let da = 0;
    let a = 0;
    let sa = 0;
    let totalParticipants =
      quizScore[0]["Strongly Agree"] +
      quizScore[0]["Strongly Disagree"] +
      quizScore[0].Agree +
      quizScore[0].Disagree;
    let percentile;

    quizScore.map((item, key) => {
      sda = sda + item["Strongly Disagree"];
      da = da + item.Disagree;
      a = a + item.Agree;
      sa = sa + item["Strongly Agree"];
    });
    let result = sda * -1 + da * 1 + a * 2 + sa * 3;
    result = result / totalParticipants;
    const quizOptionScore = [
      {
        id: "stronglyAgree",
        value: sa,
        label: "Strongly Agree",
      },
      {
        id: "stronglyDisagree",
        value: sda,
        label: "Strongly Disagree",
      },

      {
        id: "disagree",
        value: da,
        label: "Disagree",
      },
      {
        id: "agree",
        value: a,
        label: "Agree",
      },
    ];
    percentile = (result / 48) * 100;

    quizsScore["Strongly Agree"] = sa;
    quizsScore.Agree = a;
    quizsScore["Strongly Disagree"] = sda;

    quizsScore.Disagree = da;

    const data = { result, totalParticipants, percentile, quizOptionScore };
    return data;
  };

  useEffect(() => {
    getQuizScore();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "quiz", headerName: "Quiz", width: 600 },
    { field: "Strongly Agree", headerName: "Strongly Agree", width: 130 },
    { field: "Agree", headerName: "Agree", width: 80 },
    { field: "Disagree", headerName: "Disagree", width: 80 },
    { field: "Strongly Disagree", headerName: "Strongly Disagree", width: 130 },
    {
      field: "chart",
      headerName: "Chart",
      width: 200,
      renderCell: (params) => (
        <ChartModal
          a={params.row.Agree}
          sa={params.row["Strongly Agree"]}
          da={params.row.Disagree}
          sda={params.row["Strongly Disagree"]}
          q={params.row.quiz}
        />
      ),
    },
  ];

  const rowsWithId =
    (quizScore && quizScore.map((row, index) => ({ ...row, id: index + 1 }))) ||
    [];

  // Transform data for the bar chart
  // Transform data for the bar chart
  const chartData = rowsWithId.map((row, index) => ({
    quiz: `Question ${index + 1}`,
    "Strongly Agree": row["Strongly Agree"],
    Agree: row.Agree,
    Disagree: row.Disagree,
    "Strongly Disagree": row["Strongly Disagree"],
  }));

  return quizScore ? (
    <Box width={"100%"}>
      <Typography variant="body1">
        Total Score : {getTotalScore().result}
      </Typography>
      <Typography variant="body1">
        Total Participants : {getTotalScore().totalParticipants}
      </Typography>
      <Typography variant="body1">
        Percentile : {getTotalScore().percentile}
      </Typography>
      <br />
      <DataGrid
        columns={columns}
        rows={rowsWithId}
        getRowId={(row) => row.id}
        pageSize={5} // Adjust the pageSize according to your preference
      />
      <br />{" "}
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Tabs value={chartTab} onChange={handleTabChange} variant="scrollable">
          <Tab label="Bar Chart" />
          <Tab label="Pie Chart" />
        </Tabs>
      </Box>
      <Box hidden={chartTab !== 0} mt={1}>
        <BarChart data={chartData} />
      </Box>
      <Box hidden={chartTab !== 1} mt={1}>
        <PieChart data={getTotalScore().quizOptionScore} />
      </Box>
      <br />
    </Box>
  ) : (
    <>Loading</>
  );
};

export default SubjectVise;
