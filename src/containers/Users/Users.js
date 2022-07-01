import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/post.service";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" gutterBottom component="div">
          Users
        </Typography>
        {users.map((item) => (
          <Grid item lg={4}>
            <Card key={item.id} style={{ marginBottom: "15px" }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.address.street}, {item.address.suite}
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
        ))}
      </Paper>
    </Grid>
  );
};

export default Users;
