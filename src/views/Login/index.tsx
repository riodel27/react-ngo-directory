import React from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
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

import { useFormFields } from "../../_libs/hooksLib";

import AuthService from "../../_services/auth.service";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  const classes = useStyles();
  let history = useHistory();

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
        await AuthService.signIn(fields.email, fields.password);
        // userHasAuthenticated(true);
        history.push("/");
      } catch (e) {
        // onError(e);
        // setIsLoading(false);
      }
    }
  }

  return (
    <React.Fragment>
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
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Login;