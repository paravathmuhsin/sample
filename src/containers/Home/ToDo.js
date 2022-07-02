import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getToDos } from "../../services/ToDo.service";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./style/todo.css";
const ToDo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
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
              <Grid item xs={2} sm={4} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <div className="note">
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.userId}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <label className="statusText">Status :</label>

                          <input
                            className="checkBox"
                            type="checkbox"
                            checked={true ? item.completed == true : false}
                          />
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default ToDo;
