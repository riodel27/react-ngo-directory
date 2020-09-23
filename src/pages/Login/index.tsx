import React from "react";
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

import { useFormFields } from "_libs/hooksLib";
import AuthService from "_services/auth.service";
import { useAuthDispatch } from "context/auth";

export const Login: React.FC = () => {
  const classes = useStyles();

  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });

  const dispatch = useAuthDispatch();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // setIsLoading(true);
    if (event.currentTarget.checkValidity() === false) event.stopPropagation();
    else {
      try {
        const response = await AuthService.SignIn(
          fields.email,
          fields.password
        );

        dispatch({ type: "LOGIN", payload: response.data.access_token });
        window.location.href = "/";
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

export default Login;
