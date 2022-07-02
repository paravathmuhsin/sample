import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getToDo } from "../../services/ToDo.service";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const PostDetails = () => {
  const [todo, setTodo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getToDo(id).then((data) => {
      setTodo(data);
    });
  }, [id]);

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        {todo ? (
          <>
            <Card sx={{ maxWidth: 345 }}>
              <div className="note">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <span className="item">{todo.userId}</span>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    <span className="item">{todo.title}</span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <label className="container">
                      Status
                      <input
                        className="checkBox"
                        type="checkbox"
                        checked={true ? todo.completed === true : false}
                      />
                      <span class="checkmark"></span>
                    </label>
                    {/* <label className="status">Status :</label>
                          <input
                            className="checkBox"
                            type="checkbox"
                            checked={true ? item.completed == true : false}
                          /> */}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </>
        ) : null}
      </Paper>
    </Grid>
  );
};

export default PostDetails;
