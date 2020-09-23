import React from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";

import { useStyles } from "./styled";
import useUsersQuery from "hooks/user/query/useUsersQuery";

interface UserProps {}

export const User: React.FC<UserProps> = ({}) => {
  const classes = useStyles();

  const { isLoading, data, isError } = useUsersQuery();

  if (isLoading) return <>loading...</>;

  if (isError) return <>"An error has occurred..."</>;

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary">
              <span> Users</span>
              <ul>
                {data &&
                  data.map((user: any) => <li key={user._id}>{user.email}</li>)}
              </ul>
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
};

export default User;
