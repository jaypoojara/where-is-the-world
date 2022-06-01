import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Router from "./routes/Router";
import Header from "../src/components/Header";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { PaletteOptions } from "@mui/material/styles/createPalette";

function App() {
  const getDesignTokens = (mode: boolean): { palette: PaletteOptions } => ({
    palette: {
      mode: mode ? "dark" : "light",
      ...(!mode
        ? {
            primary: {
              dark: "hsl(0, 0%, 52%)",
              main: "hsl(0, 0%, 98%)",
              light: "hsl(0, 0%, 100%)",
            },
            background: {
              default: "hsl(0, 0%, 98%)",
              paper: "hsl(0, 0%, 100%)",
            },
            text: {
              primary: "hsl(200, 15%, 8%)",
            },
          }
        : {
            primary: {
              dark: "hsl(200, 15%, 8%)",
              main: "hsl(207, 26%, 17%)",
              light: "hsl(209, 23%, 22%)",
            },
            background: {
              default: "hsl(207, 26%, 17%)",
              paper: "hsl(209, 23%, 22%)",
            },
            text: {
              primary: "hsl(0, 0%, 100%)",
            },
          }),
    },
  });

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <ThemeProvider theme={createTheme(getDesignTokens(isDarkTheme))}>
      <CssBaseline />
      <Header changeTheme={changeTheme} isDarkTheme={isDarkTheme} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
