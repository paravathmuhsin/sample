import { Grid, Paper } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        Home
      </Paper>
    </Grid>
  );
};

export default Home;
