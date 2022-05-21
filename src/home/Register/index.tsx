import React from "react";
import { Grid, TextField, Box, Button } from "@mui/material";
import useStyles from "../styles";

function Register() {
  const classes = useStyles();

  return (
    <Grid
      container
      sx={{ backgroundColor: "#29abe2" }}
      direction="column"
      alignItems="center"
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid item>
          <TextField
            required
            id="standard-required"
            label="Nome"
            variant="standard"
            className={classes.registerText}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            id="standard-required"
            label="E-mail"
            variant="standard"
            color="primary"
          />
        </Grid>
        <Grid item>
          <TextField
            required
            id="standard-required"
            label="Nascimento"
            variant="standard"
          />
        </Grid>
        <Grid item>
          <TextField
            required
            id="standard-required"
            label="Telefone"
            variant="standard"
          />
        </Grid>
        <Grid item display="flex" justifyContent="center">
          <Button variant="contained" color="secondary">
            <h2 className={classes.textColorBlue}>CADASTRAR</h2>
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
}

export default Register;
