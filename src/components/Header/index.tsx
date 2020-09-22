import React from "react";
import { AppBar, Toolbar, Typography, Link, Button } from "@material-ui/core";

import { Link as RouterLink } from "react-router-dom";

import Logo from "_assets/images/Logo.svg";
import { useStyles } from "./styled";

import { useAuthState, useAuthDispatch } from "context/auth";

export const Header: React.FC = ({}) => {
  const classes = useStyles();

  const { user } = useAuthState();
  const dispatch = useAuthDispatch();

  const handleLoginOrLogout = () => {
    if (user) dispatch({ type: "LOGOUT" });

    window.location.href = "/sign-in";
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <RouterLink to="/">
            <img src={Logo} alt="Globe Drop" />
          </RouterLink>
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
            Organizations
          </Link>
        </nav>
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
  );
};

export default Header;
