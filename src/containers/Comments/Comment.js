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
  import { useSelector, useDispatch } from "react-redux";
  import { Link } from "react-router-dom";
  import { useAppContext } from "../../components/AppContextProvider/AppContextProvider";
import { getCommentsAction } from "../../store/actions/comments.action";
  
  const Comments = () => {
    const comments = useSelector((state) => state.comments.comments);
    const { setAppTitle } = useAppContext();
    const dispatch = useDispatch();
    // const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      setAppTitle('Comments')
      if (!comments.length) {
        dispatch(getCommentsAction());
      }
      // getPosts().then((data) => {
      //   setPosts(data);
      // });
    }, []);
  
    return (
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" gutterBottom component="div">
            Comments
          </Typography>
          {comments.map((item) => (
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
                <Link to={`/comments/${item.id}`}>
                  <Button size="small">Learn More</Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </Paper>
      </Grid>
    );
  };
  
  export default Comments;
  