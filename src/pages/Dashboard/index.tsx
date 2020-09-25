import React from "react";
import * as Router from "react-router-dom";

import { Container, Grid, Paper } from "@material-ui/core";

import { useStyles } from "./styled";

import { useAuthState } from "context/auth";
import useUsersQuery from "hooks/user/query/useUsersQuery";
import useOrganizations from "hooks/organization/query/useOrganizations";

import Table from "components/Dashboard/Table";
import Header from "components/Dashboard/Header";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  const classes = useStyles();

  const { user } = useAuthState();

  const { data: users } = useUsersQuery();
  const { data: organizations } = useOrganizations();

  return user && user.userType !== "super_admin" ? (
    <Router.Redirect to="/users" />
  ) : (
    <>
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Table users={users} organizations={organizations} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Dashboard;
