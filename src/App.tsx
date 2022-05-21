import React from "react";
import Home from "./home";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
