import { Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/User.service";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useAppContext } from "../../components/AppContextProvider/AppContextProvider";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setAppTitle } = useAppContext();

  useEffect(() => {
    setAppTitle('Users')
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
          <Grid key={item.id} item lg={4}>
            <Card
              key={item.id}
              style={{ margin: "15px", background: "#fdfdfd" }}
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
                  style={{ textAlign: "center", fontSize: "16px", fontWeight: "600" }}
                >
                  {item.name}
                </Typography>
                
                <Stack
                  direction="row"
                  spacing={2}
                  style={{ justifyContent: "center" }}
                >
                <Link to={`/Users/${item.id}`}  style={{textDecorationLine:"none"}}> 
                  <Button variant="contained" endIcon={<SendIcon />} style={{fontSize: "12px"}}>
                    View More
                </Button>
                  </Link>   
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
