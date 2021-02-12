import React from "react";
import {
  Grid,
  Typography,
  Container,
  CssBaseline,
  Button,
} from "@material-ui/core";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { backHome } from "../redux/actions/FetchDataActions";

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "70px",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    marginBottom: "50px",
    // background: "#222f3e",
  },
  button: {
    width: "150px",
    marginLeft: "10%",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 10,
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.8)",
    width: "100%",
    height: "auto",
    background: "#f1f2f6",
  },
  avatar: {
    margin: theme.spacing(4),
    width: "300px",
    height: "300px",
    borderRadius: 200,
  },
  name: {
    fontSize: "2.5em",
    color: "#222f3e",
  },
  house: {
    fontSize: "1.6em",
    color: "#222f3e",
  },
  info: {
    fontSize: "1.3em",
    color: "#222f3e",
    textAlign: "right",
  },
  info2: {
    fontSize: "1.3em",
    color: "#222f3e",
    textAlign: "right",
    paddingTop: "45px",
  },
  properties: {
    fontSize: "1.3em",
    color: "#222f3e",
    textAlign: "left",
    marginLeft: "15px",
  },
  propertiesIcon: {
    fontSize: "1.3em",
    color: "#222f3e",
    textAlign: "left",
    marginLeft: "15px",
    marginTop: "5px",
  },
}));

const Character = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { character } = useSelector((state) => state.fetchData);
  const { userData } = useSelector((state) => state.login);
  console.log(userData);
  const handleBack = () => {
    dispatch(backHome());
    history.push("/");
  };

  return (
    <>
      <header
        className={classes.navbar}
        style={{
          background: userData?.data?.staff === true ? "#006266" : "#222f3e",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          size="large"
          onClick={handleBack}
          startIcon={<ArrowBackOutlinedIcon />}
        >
          Back
        </Button>
      </header>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <img
            className={classes.avatar}
            src={character?.image}
            alt={character?.image}
          />
          <Typography className={classes.name}>{character?.name}</Typography>
          <Typography className={classes.house}>{character?.house}</Typography>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ marginTop: "10px" }}
          >
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Typography className={classes.info}>Birth Date</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Typography className={classes.properties}>
                {character?.dateOfBirth || "No record"}
              </Typography>
            </Grid>
          </Grid>

          <Grid container style={{ margin: "15px 0px" }}>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Typography className={classes.info2}>Wand</Typography>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography className={classes.properties}>Core</Typography>
                  <Typography
                    style={{ marginLeft: "15px" }}
                    variant="body2"
                    color="textSecondary"
                  >
                    {character?.wand?.core || "No record"}
                  </Typography>

                  <Typography className={classes.properties}>Length</Typography>
                  <Typography
                    style={{ marginLeft: "15px" }}
                    variant="body2"
                    color="textSecondary"
                  >
                    {character?.wand?.length || "No record"}
                  </Typography>

                  <Typography className={classes.properties}>Wood</Typography>
                  <Typography
                    style={{ marginLeft: "15px" }}
                    variant="body2"
                    color="textSecondary"
                  >
                    {character?.wand?.wood || "No record"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            // spacing={1}
          >
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Typography className={classes.info}>Patronus</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Typography className={classes.properties}>
                {character?.patronus || "doesn't have"}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ marginTop: "10px" }}
          >
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Typography className={classes.info}>Blood</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Typography className={classes.properties}>
                {character?.ancestry || "No record"}
              </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Typography className={classes.info}>Alive</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Typography className={classes.propertiesIcon}>
                {character?.alive === true ? (
                  <CheckCircleOutlineRoundedIcon style={{ color: "#2ecc71" }} />
                ) : (
                  <HighlightOffOutlinedIcon style={{ color: "#e74c3c" }} />
                )}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Character;
