import React from "react";
import {
  Container,
  CssBaseline,
  IconButton,
  Typography,
} from "@material-ui/core";

import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";

import { useStyles } from "./styled";

interface UserProps {}

export const User: React.FC<UserProps> = ({}) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary">
              <span>Users</span>
              <IconButton aria-label="add">
                <AddCircleOutlinedIcon />
              </IconButton>
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
};

export default User;
