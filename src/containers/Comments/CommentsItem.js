import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {getComments} from "../../services/Comments.service"
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { Link } from "react-router-dom";
const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments.then((data) => {
      setComments(data);
    });
  }, []);
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" gutterBottom component="div">
          Comments
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {comments.map((item) => (
              <Grid key={item.id} item xs={2} sm={4} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <div className="note">
                    <CardActionArea>
                      <Link to={`/comments/${item.id}`}>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            <span className="item">{item.userId}</span>
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            <span className="item">{item.title}</span>
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

export default Comments;