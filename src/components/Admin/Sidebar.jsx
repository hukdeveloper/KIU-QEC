"use client";
import {
  Apartment,
  Dataset,
  HomeOutlined,
  ListAlt,
  MenuBook,
  Person2,
  PersonAdd,
  Poll,
  QuestionAnswer,
  School,
  Subject,
  TravelExplore,
  Home as HomeIcon,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  SubMenu,
  MenuItem,
} from "react-pro-sidebar";
import { ThemeContext } from "../../context/ContextProvider";
import { Avatar, Box, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
const Sidebar = () => {
  const { collapse, mode } = useContext(ThemeContext);

  const router = useRouter();
  return (
    <ProSidebar
      collapsed={collapse}
      style={{
        backgroundColor: "black",
        overflowY: "auto",
        height: "100vh",
      }}
    >
      <Paper
        sx={{
          height: "100%",
          borderRadius: 0,
          ".ps-submenu-content-test-id": {
            inset: "65px auto auto 0px",
          },
          ".ps-menuitem-root": {
            zIndex: 1111111111111111,
          },
          ".ps-menuitem-root a": {
            ":hover": {
              bgcolor: "#0099FF",
            },
          },
          ".ps-menu-button": {
            bgcolor: mode === "dark" ? "#000000" : "#9D9A9A",
          },
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"100%"}
          p={"20px 0"}
        >
          {!collapse && (
            <Avatar
              variant="rounded"
              sx={{
                height: 100,
                width: 100,
              }}
            />
          )}
        </Box>
        <Menu>
          <Menu>
            <MenuItem
              icon={<HomeIcon />}
              onClick={() => router.push("/admin/")}
            >
              Home (Beta)
            </MenuItem>
            <SubMenu icon={<Poll />} label="Performance (Beta)">
              <MenuItem
                icon={<PersonAdd />}
                onClick={() => router.push("/admin/performance/teachers")}
              >
                {" "}
                Teachers
              </MenuItem>
              <MenuItem
                icon={<Apartment />}
                onClick={() => router.push("/admin/performance/departments")}
              >
                {" "}
                Departments
              </MenuItem>
              <MenuItem
                icon={<Subject />}
                onClick={() => router.push("/admin/performance/subjects")}
              >
                Subjects
              </MenuItem>
            </SubMenu>
            <SubMenu icon={<Dataset />} label="Data (Alpha)">
              <MenuItem icon={<PersonAdd />}> Teachers</MenuItem>
              <MenuItem icon={<Apartment />}> Departments</MenuItem>
              <MenuItem icon={<Subject />}>Subjects</MenuItem>
              <MenuItem icon={<QuestionAnswer />}>Questions</MenuItem>
              <MenuItem icon={<ListAlt />}>Options</MenuItem>
            </SubMenu>
            <SubMenu icon={<TravelExplore />} label="Evaluation (Alpha)">
              <MenuItem icon={<School />}> Students</MenuItem>
              <MenuItem icon={<QuestionAnswer />}> Questions</MenuItem>
            </SubMenu>
          </Menu>
          <br />
        </Menu>
      </Paper>
    </ProSidebar>
  );
};

export default Sidebar;
