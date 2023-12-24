"use client";

import {
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

import axios from "axios";

import SubjectVise from "./SubjectVise";

const TeacherData = ({ teacherName, url }) => {
  const [teacher, setTeacher] = useState(null);

  const getTeacherData = async () => {
    const slug = teacherName;
    const data = await axios.get(`/api/${url}/${slug}`);
    setTeacher(data.data);
  };

  useEffect(() => {
    !teacher && getTeacherData();
  }, []);
  console.log(teacher);
  return (
    <Box width={"100%"}>
      {teacher ? (
        <>
          {teacher.map((item, key) => (
            <Box key={key} mt={2} borderBottom={2}>
              <Typography variant="h6" mt={1}>
                {url === "subject" ? item.teacher : item.subject}
              </Typography>

              <Box mt={1}>
                <SubjectVise
                  campus={item.campus}
                  department={item.department}
                  subject={item.subject}
                  teacher={item.teacher}
                />
              </Box>
            </Box>
          ))}
        </>
      ) : (
        <>Loading.....</>
      )}
    </Box>
  );
};

export default TeacherData;
