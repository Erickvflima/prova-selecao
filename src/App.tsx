import React from "react";
import Home from "./home";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
