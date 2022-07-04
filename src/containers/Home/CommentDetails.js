import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { getcomments} from "../../services/comments.service";

const CommentDetails = () => {
  const [Comment, setComments] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getcomments(id).then((data) => {
      setComments(data);
    });
  }, [id]);

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        {Comment ? (
          <>
            <Typography gutterBottom variant="h5" component="div">
              {Comment.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Comment.body}
            </Typography>
          </>
        ) : null}
      </Paper>
    </Grid>
  );
};

export default CommentDetails;