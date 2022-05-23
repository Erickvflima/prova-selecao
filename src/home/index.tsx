import React from "react";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import Register from "./Register";
import Footer from "./Footer";
import ListData from "./ListRegistration";

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
        <ListData />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default Home;
