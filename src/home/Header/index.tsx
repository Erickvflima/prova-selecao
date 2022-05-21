import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import useStyles from "../styles";
import logo from "../../assets/image/logo.png";

function Header() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Paper className={classes.headerImg}>
          <Grid container justifyContent={"space-around"}>
            <Grid item marginTop="5px">
              <img src={logo} alt="logo" />
            </Grid>

            <Grid item direction="row">
              <Grid container color={"primary"}>
                <Grid item className={classes.styleMenuHeadertext}>
                  <Button>cadastro</Button>
                </Grid>
                <Grid
                  className={classes.styleMenuHeadertext}
                  sx={{ margin: "6px 5px 0 5px" }}
                >
                  &bull;
                </Grid>
                <Grid item className={classes.styleMenuHeadertext}>
                  <Button>lista</Button>
                </Grid>
                <Grid
                  className={classes.styleMenuHeadertext}
                  sx={{ margin: "6px 5px 0 5px" }}
                >
                  &bull;
                </Grid>
                <Grid item className={classes.styleMenuHeadertext}>
                  <Button>sobre mim</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent={"space-around"}
            margin="8% 0 0 20%"
          >
            <Grid item>
              <Typography
                variant="h2"
                className={classes.styleHeadertext}
                fontSize="4rem"
              >
                ESTÁGIO
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h2"
                className={classes.styleHeadertext}
                fontSize="1.7rem"
              >
                PROVA DE SELEÇÃO
              </Typography>
            </Grid>
            <Grid item> </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Header;
