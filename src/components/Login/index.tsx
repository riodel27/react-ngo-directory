import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import {
  CssBaseline,
  Container,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
  Grid,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { useStyles } from "./styled";

import { useFormFields, useLocalStorage } from "../../_libs/hooksLib";
import AuthService from "../../_services/auth.service";
import { AuthContext } from "../Authentication";

export const Login: React.FC<any> = ({ history }) => {
  const classes = useStyles();
  const { setAuthenticated } = useContext(AuthContext);
  const [_, setToken] = useLocalStorage("globedrop", "");
  const [__, setUserId] = useLocalStorage("user_id", "");
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // setIsLoading(true);
    if (event.currentTarget.checkValidity() === false) event.stopPropagation();
    else {
      try {
        const response = await AuthService.signIn(
          fields.email,
          fields.password
        );

        setToken(response.data.access_token);
        setUserId(response.data.user._id);
        setAuthenticated(true);

        history.push("/");
      } catch (e) {
        console.log("error auth sign: ", e);
        // onError(e);
        // setIsLoading(false);
      }
    }
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs" component="main">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={fields.email}
              onChange={handleFieldChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={fields.password}
              onChange={handleFieldChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};

export default withRouter(Login);
