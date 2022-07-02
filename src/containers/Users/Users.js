import { Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/post.service";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./users.css";

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
            <Card key={item.id} style={{ marginBottom: "15px", background: "#fdfdfd" }}>
              <CardContent>
                <div style={{textAlign: "center"}}>
                  <AccountCircleIcon
                    style={{
                      color: "#020080",
                      fontSize: "80px",
                      alignItems: "center",
                    }}
                  />
                </div>
                <Typography gutterBottom variant="h6" component="div" style={{textAlign: "center"}}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <strong>Username:</strong>{item.username}   <strong>Email:</strong>{item.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Address:</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.address.street}, {item.address.suite},{" "}
                  {item.address.suite}, {item.address.city},{" "}
                  {item.address.zipcode}, {item.address.geo.lat},{" "}
                  {item.address.geo.lng}.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Phone:</strong> {item.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <strong>Website:</strong>{item.website}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Company Details:</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ fontSize: "12px" }}>
                  {item.company.name},
                  {item.company.catchPhrase},
                  {item.company.bs}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Paper>
    </Grid>
  );
};

export default Users;
