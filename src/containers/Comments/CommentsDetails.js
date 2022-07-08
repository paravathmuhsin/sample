import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../components/AppContextProvider/AppContextProvider";
import { getComments } from "../../services/Comments.service";

const CommentsDetails = () => {
  const [comments, setComments] = useState(null);
  const { setAppTitle } = useAppContext();
  const { id } = useParams();

  useEffect(() => {
    setAppTitle('Comments Details')
    getComments(id).then((data) => {
      setComments(data);
    });
  }, [id]);

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        {comments ? (
          <>
            <Typography gutterBottom variant="h5" component="div">
              {comments.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {comments.body}
            </Typography>
          </>
        ) : null}
      </Paper>
    </Grid>
  );
};

export default CommentsDetails;