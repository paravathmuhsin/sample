import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getToDos } from "../../services/ToDo.service";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./style/todo.css";
import { Link } from "react-router-dom";
import { useAppContext } from "../../components/AppContextProvider/AppContextProvider";
const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const { setAppTitle } = useAppContext();
  useEffect(() => {
    setAppTitle("ToDo");
    getToDos().then((data) => {
      setTodos(data);
    });
  }, [setAppTitle]);
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
                <Card sx={{ maxWidth: 345 }}>
                  <div className="note">
                    <CardActionArea>
                      <Link to={`/todo/${item.id}`}>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            <span className="item">User ID: {item.userId}</span>
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            <span className="item">
                              Description: {item.title}
                            </span>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <label className="container">
                              Status
                              <input
                                className="checkBox"
                                type="checkbox"
                                readOnly
                                checked={item.completed}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </Typography>
                        </CardContent>
                      </Link>
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
