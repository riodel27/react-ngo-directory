import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Button,
  CssBaseline,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";

import { useStyles } from "./styled";
import { useAuthState, useAuthDispatch } from "context/auth";

interface HeaderProps {}

//TODO: maybe this is not needed and re-use the Header Component. Just need to change the background.
export const Header: React.FC<HeaderProps> = ({}) => {
  const classes = useStyles();

  const dispatch = useAuthDispatch();
  const { user } = useAuthState();

  const [open, setOpen] = React.useState(true);

  const handleLoginOrLogout = () => {
    if (user) dispatch({ type: "LOGOUT" });

    window.location.href = "/sign-in";
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
            <nav>
              <Link
                variant="button"
                color="textPrimary"
                className={classes.link}
                component={RouterLink}
                to="/users"
              >
                Users
              </Link>

              <Link
                variant="button"
                color="textPrimary"
                className={classes.link}
                component={RouterLink}
                to="/organizations"
              >
                NGO's
              </Link>
            </nav>
            {user && (
              <span>
                Welcome, <strong>{user.username}</strong>
              </span>
            )}
            <Button
              href="#"
              color="primary"
              variant="outlined"
              className={classes.link}
              onClick={handleLoginOrLogout}
            >
              {user ? "Logout" : "Login"}
            </Button>
            <nav>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                FR
              </Link>
            </nav>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Header;
