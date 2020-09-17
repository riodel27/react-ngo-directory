import React from "react";
import { AppBar, Toolbar, Typography, Link, Button } from "@material-ui/core";

import Logo from "../../_assets/images/Logo.svg";

import { useStyles } from "./styled";

export const Header: React.FC = ({}) => {
  const classes = useStyles();
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
          <img src={Logo} alt="Globe Drop" />
        </Typography>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            User List
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            NGO List
          </Link>
        </nav>
        <Button
          href="#"
          color="primary"
          variant="outlined"
          className={classes.link}
        >
          Login
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
