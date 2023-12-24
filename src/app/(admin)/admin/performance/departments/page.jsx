"use client";

import { Box, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Telegram } from "@mui/icons-material";
import Subheading from "../../../../../components/Global/Subheading";

// renderCell: (params) => <DropModals id={params.row.id} />,

const Department = () => {
  const [data, setData] = useState(null);
  const router = useRouter();

  const getResults = async () => {
    try {
      const res = await axios.get("/api/department");
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
    router.push(`/admin/performance/departments/${slug}`);
  };

  const columns = [
    { field: "name", headerName: "Name", width: 500 },
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
    <Box display={"flex"} flexDirection={"column"} p={"0 10px"} mt={1}>
      <Subheading title={"Departmental Evaluations"} />

      {data ? (
        <>
          <DataGrid
            sx={{
              mt: 1,
            }}
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

export default Department;
