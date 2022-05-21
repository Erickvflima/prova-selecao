import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

import useStyles from "../styles";

function Footer() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Paper className={classes.footerImg}>
          <Grid container alignItems="center" direction="column" spacing={1}>
            <Grid item marginTop="5%">
              <Typography
                variant="h2"
                className={classes.styleHeadertext}
                fontSize="1rem"
              >
                Erick Vinicius Ferreira Lima
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h2"
                className={classes.styleHeadertext}
                fontSize="1rem"
              >
                erickvflima@gmail.com
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h2"
                className={classes.styleHeadertext}
                fontSize="1rem"
              >
                (31)984675300
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h2"
                className={classes.styleHeadertext}
                fontSize="1rem"
              >
                Desenvolvedor de software
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Footer;
