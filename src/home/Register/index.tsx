import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks";

import { Grid, TextField, Box, Button } from "@mui/material";
import useStyles from "../styles";
import { personDataList } from "../../store/ducks/PersonData";

function Register() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(personDataList());
  }, []);

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
        <Grid item display="flex" justifyContent="center" margin="40px">
          <Button variant="contained" color="secondary">
            <h2 className={classes.textColorBlue}>CADASTRAR</h2>
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
}

export default Register;
