"use client";

import { Box, IconButton } from "@mui/material";
import TeacherEval from "./TeacherEval";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Telegram } from "@mui/icons-material";

// renderCell: (params) => <DropModals id={params.row.id} />,

const TeachersData = () => {
  const [data, setData] = useState(null);
  const router = useRouter();

  const getResults = async () => {
    try {
      const res = await axios.get("/api/teacher");
      setData(res.data);
    } catch (error) {
      alert(`${error}`);
    }
  };

  useEffect(() => {
    getResults();
  }, []);

  const handleRouting = (name) => {
    const slug = name.replace(/\s+/g, "-");
    router.push(`/admin/performance/teachers/${slug}`);
  };

  const columns = [
    { field: "name", headerName: "Name", width: 250 },
    { field: "department", headerName: "Department", width: 400 },
    { field: "totalSubjects", headerName: "Subjects", width: 120 },
    { field: "averageScore", headerName: "Average Score", width: 200 },
    {
      field: "details",
      headerName: "Details",
      width: 200,
      renderCell: (params) => (
        <IconButton
          color="secondary"
          onClick={() => handleRouting(params.row.name)}
        >
          <Telegram />
        </IconButton>
      ),
    },
  ];
  const rowsWithId =
    data && data.map((row, index) => ({ ...row, id: index + 1 }));

  return (
    <Box display={"flex"} flexDirection={"column"} mt={1}>
      {data ? (
        <>
          <DataGrid
            columns={columns}
            rows={rowsWithId}
            getRowId={(row) => row.id}
          />
        </>
      ) : (
        <>Loading....</>
      )}
    </Box>
  );
};

export default TeachersData;
