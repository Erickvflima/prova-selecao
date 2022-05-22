import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import imgHeader from "../assets/image/img-header.png";
import imgFooter from "../assets/image/rodape-desktop.jpg";

const useStyles = makeStyles((theme: Theme) => {
  return {
    headerImg: {
      height: "100vh",
      backgroundImage: `url(${imgHeader})`,
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
    },
    alignImg: {},
    footerImg: {
      height: "30vh",
      width: "100%",
      backgroundImage: `url(${imgFooter})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
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
    borderTable: {
      border: 1,
      color: "#29abe2",
    },
  };
});

export default useStyles;
