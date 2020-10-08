import { AppBar, Button, CssBaseline, Link, Toolbar, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { useAuthDispatch, useAuthState } from 'context/auth';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { useStyles } from './styled';

export const Header = () => {
   const classes = useStyles();

   const dispatch = useAuthDispatch();
   const { user } = useAuthState();

   const [open, setOpen] = React.useState(true);

   const handleLoginOrLogout = () => {
      if (user) dispatch({ type: 'LOGOUT' });

      window.location.href = '/sign-in';
   };

   return (
      <>
         <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={clsx(classes.appBar, open && classes.appBarShift)}>
               <Toolbar className={classes.toolbar}>
                  <Typography
                     component="h1"
                     variant="h6"
                     color="inherit"
                     noWrap
                     className={classes.title}>
                     Dashboard
                  </Typography>
                  <nav>
                     <Link
                        variant="button"
                        color="textPrimary"
                        className={classes.link}
                        component={RouterLink}
                        to="/users">
                        Users
                     </Link>

                     <Link
                        variant="button"
                        color="textPrimary"
                        className={classes.link}
                        component={RouterLink}
                        to="/organizations">
                        NGOs
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
                     onClick={handleLoginOrLogout}>
                     {user ? 'Logout' : 'Login'}
                  </Button>
                  <nav>
                     <Link variant="button" color="textPrimary" href="#" className={classes.link}>
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
