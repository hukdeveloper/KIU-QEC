"use client";
import { Poll } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

const TeacherEval = ({ id }) => {
  const router = useRouter();
  return (
    <>
      <IconButton
        color="info"
        onClick={() => router.push(`/admin/performance/teachers/${id}`)}
      >
        <Poll />
      </IconButton>
    </>
  );
};

export default TeacherEval;
