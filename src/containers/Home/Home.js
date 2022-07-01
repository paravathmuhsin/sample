import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../../services/post.service";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" gutterBottom component="div">
          Posts
        </Typography>
        {posts.map((item) => (
          <Card key={item.id} style={{ marginBottom: "15px" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.body}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/post/${item.id}`}>
                <Button size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Paper>
    </Grid>
  );
};

export default Home;
