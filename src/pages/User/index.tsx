import {
   Box,
   Button,
   Container,
   CssBaseline,
   Paper,
   Table,
   TableBody,
   TableContainer,
   TableHead,
   TableRow,
   Typography
} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useUsersInfiniteQuery from 'hooks/user/query/useUsersInfiniteQuery';
import React from 'react';

import { User as UserType } from '@/global/types';

import { StyledTableCell, StyledTableRow, useStyles } from './styled';

export const User = () => {
   const classes = useStyles();

   const responseData: any = useUsersInfiniteQuery();

   const loadMoreButtonRef: any = React.useRef();

   useIntersectionObserver({
      target: loadMoreButtonRef,
      onIntersect: responseData.fetchMore,
      enabled: responseData.canFetchMore
   });

   if (responseData.isLoading)
      return (
         <>
            <LinearProgress />
         </>
      );

   if (responseData.error) return <>An error has occurred...</>;

   return (
      <>
         <CssBaseline />
         <main>
            <div className={classes.heroContent}>
               <Container maxWidth="sm">
                  <Typography variant="h3" align="center" color="textPrimary">
                     <span>Users</span>
                  </Typography>
               </Container>
            </div>
            <TableContainer component={Paper} className={classes.container}>
               <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                     <TableRow>
                        <StyledTableCell>Username</StyledTableCell>
                        <StyledTableCell align="left">Name</StyledTableCell>
                        <StyledTableCell align="left">Email</StyledTableCell>
                        <StyledTableCell align="left">Language</StyledTableCell>
                        <StyledTableCell align="left">Country</StyledTableCell>
                        <StyledTableCell align="left">role</StyledTableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {responseData.data &&
                        responseData.data.map((page: any, i: any) => (
                           <React.Fragment key={i}>
                              {page.data &&
                                 page.data.map((user: UserType) => (
                                    <StyledTableRow key={user._id}>
                                       <StyledTableCell component="th" scope="row">
                                          {user.username}
                                       </StyledTableCell>
                                       <StyledTableCell align="left">{user.name}</StyledTableCell>
                                       <StyledTableCell align="left">{user.email}</StyledTableCell>
                                       <StyledTableCell align="left">
                                          {user.language}
                                       </StyledTableCell>
                                       <StyledTableCell align="left">
                                          {user.country}
                                       </StyledTableCell>
                                       <StyledTableCell align="left">
                                          {user.userType}
                                       </StyledTableCell>
                                    </StyledTableRow>
                                 ))}
                           </React.Fragment>
                        ))}
                  </TableBody>
               </Table>
               <Box display="flex" flexDirection="row-reverse" p={1}>
                  <Button
                     ref={loadMoreButtonRef}
                     onClick={() => responseData.fetchMore()}
                     disabled={!responseData.canFetchMore || responseData.isFetchingMore}>
                     {responseData.isFetchingMore
                        ? 'Loading more...'
                        : responseData.canFetchMore
                        ? 'Load More'
                        : 'Nothing more to load'}
                  </Button>
               </Box>
            </TableContainer>
         </main>
      </>
   );
};

export default User;
