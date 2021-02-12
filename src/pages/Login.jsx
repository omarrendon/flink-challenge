import React from "react";
import {
  Avatar,
  TextField,
  Button,
  Container,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions/LoginActions";
import useForm from "../hooks/useForm";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#52DED2",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.login);
  const [formValues, handleInputChange, reset] = useForm({
    user: "",
    password: "",
  });
  const { user, password } = formValues;

  const classes = useStyles();

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(loginAction(user, password));
    reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          {error === true ? (
            <Typography
              variant="h5"
              color="secondary"
              style={{ textAlign: "center" }}
            >
              Email or Pasword incorrect
            </Typography>
          ) : (
            ""
          )}
          <TextField
            variant="outlined"
            margin="normal"
            type="email"
            required
            fullWidth
            label="Email Address"
            name="user"
            value={user}
            autoFocus
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={handleInputChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
