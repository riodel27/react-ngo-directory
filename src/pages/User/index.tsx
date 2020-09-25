import React from "react";
import {
  Container,
  CssBaseline,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

import { StyledTableCell, StyledTableRow, useStyles } from "./styled";
import { User as UserType } from "@/global/types";
import useUsersQuery from "hooks/user/query/useUsersQuery";

import LinearProgress from "@material-ui/core/LinearProgress";

interface UserProps {}

// TODO: paginate or lazy load users table

export const User: React.FC<UserProps> = ({}) => {
  const classes = useStyles();

  const { isLoading, data: users, isError } = useUsersQuery();

  if (isLoading)
    return (
      <>
        <LinearProgress />
      </>
    );

  if (isError) return <>"An error has occurred..."</>;

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
        <TableContainer component={Paper}>
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
              {users &&
                users.map((user: UserType) => (
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
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </>
  );
};

export default User;
