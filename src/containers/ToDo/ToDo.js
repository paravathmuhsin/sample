import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getToDos } from "../../services/ToDo.service";
import { useAppContext } from "../../components/AppContextProvider/AppContextProvider";
import StickyComponent from "../../components/StickyComponent/StickyComponent";
const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const { setAppTitle } = useAppContext();
  useEffect(() => {
    setAppTitle("ToDo");
    getToDos().then((data) => {
      setTodos(data);
    });
  }, []);
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" gutterBottom component="div">
          ToDo
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {todos.map((item) => (
              <Grid key={item.id} item xs={2} sm={4} md={4}>
                <StickyComponent showLink={true} item={item} />
              </Grid>
            ))}
          </Grid>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default ToDo;
