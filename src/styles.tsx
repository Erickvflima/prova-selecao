import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#ffff" },
    secondary: { main: "#012d51" },
  },
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderLeft: "1px solid #29abe2",
          borderRight: "1px solid #29abe2",
          borderBottom: "1px solid #29abe2",
          color: "gray",
        },
      },
    },
  },
});

export default theme;
