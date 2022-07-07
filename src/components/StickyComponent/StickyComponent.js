import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./style/todo.css";

const StickyComponent = ({ item, showLink }) => {
  const cardContent = () => {
    console.log("ddd");
    return (
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <span className="item">User ID: {item.userId}</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          <span className="item">Description: {item.title}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <label className="container">
            Status
            <input
              className="checkBox"
              type="checkbox"
              readOnly
              checked={item.completed}
            />
            <span className="checkmark"></span>
          </label>
        </Typography>
      </CardContent>
    );
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <div className="note">
        <CardActionArea>
          {showLink ? (
            <Link to={`/todo/${item.id}`}>{cardContent()}</Link>
          ) : (
            cardContent()
          )}
        </CardActionArea>
      </div>
    </Card>
  );
};

export default memo(StickyComponent);
