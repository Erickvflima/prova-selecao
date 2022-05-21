import React from "react";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import Register from "./Register";
import ListRegistration from "./ListRegistration";

function Home() {
  return (
    <Grid container direction={"column"}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <Register />
      </Grid>
      <Grid item>
        <ListRegistration />
      </Grid>
      <Grid item>Rodape</Grid>
    </Grid>
  );
}

export default Home;
