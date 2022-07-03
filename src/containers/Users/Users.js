import { Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/post.service";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <Grid item xs={12}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          style={{ width: "100%" }}
        >
          Users
        </Typography>
        {users.map((item) => (
          <Grid item lg={6}>
            <Card
              key={item.id}
              style={{ margin: "15px", background: "#fdfdfd", height: "390px" }}
            >
              <CardContent>
                <div style={{ textAlign: "center" }}>
                  <AccountCircleIcon
                    style={{
                      color: "",
                      fontSize: "80px",
                      alignItems: "center",
                    }}
                  />
                </div>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{ textAlign: "center" }}
                >
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Username: </strong>
                  {item.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Email: </strong> {item.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Phone:</strong> {item.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Website:</strong>
                  {item.website}
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
                  <strong>Company Details:</strong>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontSize: "14px" }}
                >
                  {item.company.name},{item.company.catchPhrase},
                  {item.company.bs}
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  style={{ justifyContent: "flex-end" }}
                >
                  <Button variant="contained" endIcon={<SendIcon />} style={{}}>
                    Activate
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Paper>
    </Grid>
  );
};

export default Users;
