import { Box } from "@mui/material";
import Subheading from "../../../../../components/Global/Subheading";
import TeachersData from "../../../../../components/Admin/Performance/TeachersData";

const Teachers = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} p={"0 10px"} mt={1}>
      <Subheading title={"All Teachers Evaluations"} />
      <TeachersData />
    </Box>
  );
};

export default Teachers;
