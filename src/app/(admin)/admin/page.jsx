import { Box } from "@mui/material";
import HomeCards from "../../../components/Admin/Home/HomeCards";
import Mainheadings from "../../../components/Global/Mainheadings";
import Charts from "../../../components/Admin/Home/Charts";
import Top10Charts from "../../../components/Admin/Home/Top10Charts";

export default function Home() {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
    >
      <HomeCards />
      <Mainheadings title={"Departmental Performance"} />
      <Charts />
      <Mainheadings title={"Top 15 Teachers"} />
      <Top10Charts urlName={"/teacher"} title={"Teacher"} />
    </Box>
  );
}
