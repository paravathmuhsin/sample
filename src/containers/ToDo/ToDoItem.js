import { Button, Grid, Paper } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getToDo } from "../../services/ToDo.service";
import { useAppContext } from "../../components/AppContextProvider/AppContextProvider";
import StickyComponent from "../../components/StickyComponent/StickyComponent";

const PostDetails = () => {
  const [todo, setTodo] = useState(null);
  // const [state, setstate] = useState("Hiii");
  const { id } = useParams();
  const { setAppTitle } = useAppContext();
  useEffect(() => {
    setAppTitle("ToDo Item");
    getToDo(id).then((data) => {
      setTodo(data);
    });
  }, []);

  // sdsokfw0r0w4r4t4t34it4
  // const ss = useCallback(() => {
  //   console.log(todo)
  //   setstate("Hello");
  // },[todo]);

  return (
    <Grid item xs={12}>
      {/* <Button onClick={ss}>{state}</Button> */}
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        {todo ? <StickyComponent item={todo} /> : null}
      </Paper>
    </Grid>
  );
};

export default PostDetails;
