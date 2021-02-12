import React, { useEffect } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../redux/actions/LoginActions";
import {
  fetchStudentData,
  fetchAllData,
} from "../redux/actions/FetchDataActions";
import CardCharacter from "../components/CardCharacter";

const useStyles = makeStyles({
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  navbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "70px",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    marginBottom: "50px",
    // background: "#222f3e",
  },
  items: {
    display: "flex",
    marginRight: "20px",
  },
});

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { userData } = useSelector((state) => state.login);
  const { students, allCharacters } = useSelector((state) => state.fetchData);

  useEffect(() => {
    userData?.data?.staff === false
      ? dispatch(fetchStudentData())
      : dispatch(fetchAllData());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <div>
      <header
        className={classes.navbar}
        style={{
          background: userData?.data?.staff === true ? "#006266" : "#222f3e",
        }}
      >
        <Typography style={{ color: "#f5f6fa" }} className={classes.items}>
          {userData?.data?.name}
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          onClick={handleLogout}
          className={classes.items}
        >
          Logout
        </Button>
      </header>
      <div div className={classes.flex}>
        {students &&
          students?.map((student) => (
            <div className={classes.flex} key={student.name}>
              <CardCharacter student={student} />
            </div>
          ))}
        {allCharacters &&
          allCharacters?.map((character) => (
            <div className={classes.flex} key={character.name}>
              <CardCharacter character={character} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
