import { Container, Grid, Paper } from '@material-ui/core';
import Header from 'components/Dashboard/Header';
import Table from 'components/Dashboard/Table';
import { useAuthState } from 'context/auth';
import useOrganizations from 'hooks/organization/query/useOrganizations';
import useUsersQuery from 'hooks/user/query/useUsersQuery';
import React from 'react';
import * as Router from 'react-router-dom';

import { useStyles } from './styled';

export const Dashboard = () => {
   const classes = useStyles();

   const { user } = useAuthState();

   const { data: users } = useUsersQuery();
   const { data: organizations } = useOrganizations();

   return user && user.userType !== 'super_admin' ? (
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
