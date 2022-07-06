import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../components/AppContextProvider/AppContextProvider";
import { getPost } from "../../services/post.service";

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const { setAppTitle } = useAppContext();
  const { id } = useParams();

  useEffect(() => {
    setAppTitle('Post Details')
    getPost(id).then((data) => {
      setPost(data);
    });
  }, [id]);

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        {post ? (
          <>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.body}
            </Typography>
          </>
        ) : null}
      </Paper>
    </Grid>
  );
};

export default PostDetails;
