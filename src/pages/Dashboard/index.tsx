import React from "react";
import {
  AppBar,
  Badge,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import clsx from "clsx";
import { Link as RouterLink } from "react-router-dom";

import { useStyles } from "./styled";

import Chart from "components/Dashboard/Chart";
import Deposits from "components/Dashboard/Deposits";
import Orders from "components/Dashboard/Orders";
import {
  mainListItems,
  secondaryListItems,
} from "components/Dashboard/ListItems";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps | any> = ({}) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [open, setOpen] = React.useState(true);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
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
              Organizations
            </Link>
          </nav>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
