import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

// Function to generate Roboto font with specific parameters
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Light theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    // Add your light theme palette configuration here
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

// Dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    // Add your dark theme palette configuration here
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export { lightTheme, darkTheme };
