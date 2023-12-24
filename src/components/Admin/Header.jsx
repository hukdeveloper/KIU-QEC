"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { ThemeContext } from "../../context/ContextProvider";
import { Switch } from "@mui/material";

export default function Header() {
  const { handleCollapse, handleMode } = useContext(ThemeContext);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          onClick={handleCollapse}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          KIU-Quality Enhancement Cell
        </Typography>

        <Switch color="primary" onChange={handleMode} />
      </Toolbar>
    </AppBar>
  );
}
