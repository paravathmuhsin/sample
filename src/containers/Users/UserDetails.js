import { Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUsersDetails } from "../../services/User.service";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WebIcon from "@mui/icons-material/Web";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useAppContext } from "../../components/AppContextProvider/AppContextProvider";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const { setAppTitle } = useAppContext();
  const { id } = useParams();

  useEffect(() => {
    setAppTitle("User Details");
    getUsersDetails(id).then((data) => {
      setUserDetails(data);
    });
  }, [id]);

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, m: 2, display: "flex", flexDirection: "column" }}>
        {userDetails ? (
          <>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ marginBottom: "20px", fontWeight: "600" }}
            >
              {userDetails.name}
              <Link to={`/users`}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  style={{ fontSize: "12px", float: "right" }}
                >
                  View Users
                </Button>
              </Link>
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ md: 12 }}>
              <Grid item md={3}>
                <Card
                  sx={{ maxWidth: 345 }}
                  style={{ padding: "15px", height: "180px" }}
                >
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
                    variant="body2"
                    color="text.secondary"
                    style={{
                      paddingBottom: "10px",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    {userDetails.username}
                  </Typography>
                </Card>
              </Grid>

              <Grid item md={3}>
                <Card
                  sx={{ maxWidth: 345 }}
                  style={{ padding: "15px", height: "180px" }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ display: "flex" }}
                  >
                    <EmailIcon
                      style={{
                        color: "",
                        fontSize: "18px",
                        alignItems: "center",
                        marginRight: "10px",
                      }}
                    />{" "}
                    {userDetails.email}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ display: "flex" }}
                  >
                    <PhoneIcon
                      style={{
                        color: "",
                        fontSize: "18px",
                        alignItems: "center",
                        marginRight: "10px",
                      }}
                    />{" "}
                    {userDetails.phone}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ display: "flex" }}
                  >
                    <WebIcon
                      style={{
                        color: "",
                        fontSize: "18px",
                        alignItems: "center",
                        marginRight: "10px",
                      }}
                    />{" "}
                    {userDetails.website}
                  </Typography>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card
                  sx={{ maxWidth: 345 }}
                  style={{ padding: "15px", height: "180px" }}
                >
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Address:</strong>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {userDetails.address.street}, {userDetails.address.suite},{" "}
                      {userDetails.address.suite}, {userDetails.address.city},{" "}
                      {userDetails.address.zipcode},{" "}
                      {userDetails.address.geo.lat},{" "}
                      {userDetails.address.geo.lng}.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card
                  sx={{ maxWidth: 345 }}
                  style={{ padding: "15px", height: "180px" }}
                >
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Company Details:</strong>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ fontSize: "14px" }}
                    >
                      {userDetails.company.name},
                      {userDetails.company.catchPhrase},{userDetails.company.bs}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Paper
              sx={{
                p: 0,
                marginTop: 2,
                marginBottom: 2,
                display: "flex",
                flexWrap: "wrap",
                background: "#fdfdfd",
                justifyContent: "space-between",
              }}
            ></Paper>
          </>
        ) : null}
      </Paper>
    </Grid>
  );
};

export default UserDetails;
