import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import imgHeader from "../assets/image/img-header.png";

const useStyles = makeStyles((theme: Theme) => {
  return {
    headerImg: {
      minHeight: "79vh",
      backgroundImage: `url(${imgHeader})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
    styleHeadertext: {
      color: theme.palette.primary.main,
      fontSize: "50px",
    },
    styleMenuHeadertext: {
      color: theme.palette.primary.main,
      fontSize: "15px",
    },
    registerText: {
      color: theme.palette.primary.dark,
      fontSize: "15px",
    },
    registerButton: {
      color: "#012d51",
      backgroundColor: "#012d51",
    },
    textColorBlue: {
      color: "#29abe2",
      margin: "5px 0 5px 0",
    },
  };
});

export default useStyles;
