"use client";

import { Box, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "../../../components/Admin/Sidebar";
import Header from "../../../components/Admin/Header";
import Footer from "../../../components/Admin/Footer";

import ThemeRegistry from "../../../components/ThemeRegistry/ThemeRegistry";

const Wrapper = ({ children }) => {
  return (
    <ThemeRegistry>
      <Box display={"flex"}>
        <Sidebar />
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          height={"100vh"}
          sx={{
            overflowY: "auto",
            overflowX: "hidden",
            position: "relative",
          }}
        >
          <Header />
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            height={"auto"}
            p={"10px"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              height={"100%"}
              width={"100%"}
              padding="8px"
            >
              {children}
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </ThemeRegistry>
  );
};

export default Wrapper;
