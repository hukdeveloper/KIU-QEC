import { Box } from "@mui/material";
import Subheading from "../../../../../../components/Global/Subheading";
import TeacherData from "../../../../../../components/Admin/Performance/TeacherData";

const Subject = ({ params }) => {
  const { slug } = params;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      p={"0 20px"}
      mt={1}
      width={"100%"}
    >
      <Subheading title={slug} />
      <TeacherData teacherName={slug} url="subject" />
    </Box>
  );
};

export default Subject;
