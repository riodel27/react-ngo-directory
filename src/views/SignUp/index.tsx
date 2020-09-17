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

import { useFormFields } from "../../_libs/hooksLib";
import AuthService from "../../_services/auth.service";

export const SignUp: React.FC = () => {
  const classes = useStyles();

  const [fields, handleFieldChange] = useFormFields({
    username: "",
    name: "",
    email: "",
    password: "",
    language: "",
    country: "",
    ngoAdmin: false,
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // setIsLoading(true);
    if (event.currentTarget.checkValidity() === false) event.stopPropagation();
    else {
      try {
        await AuthService.SignUp(fields);
        // userHasAuthenticated(true);
        // history.push("/");
      } catch (e) {
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
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="uname"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  value={fields.username}
                  onChange={handleFieldChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="fullName"
                  autoComplete="fname"
                  value={fields.name}
                  onChange={handleFieldChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={handleFieldChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="lang"
                  name="language"
                  variant="outlined"
                  required
                  fullWidth
                  id="language"
                  label="Language"
                  autoFocus
                  value={fields.language}
                  onChange={handleFieldChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  autoComplete="country"
                  value={fields.country}
                  onChange={handleFieldChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="ngoAdmin"
                      value={fields.ngoAdmin}
                      onChange={handleFieldChange}
                      color="primary"
                    />
                  }
                  label="I am an NGO Admin"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
