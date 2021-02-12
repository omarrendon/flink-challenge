import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCaracter } from "../redux/actions/FetchDataActions";

const useStyles = makeStyles({
  card: {
    borderRadius: 10,
    width: 350,
    marginBottom: 25,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.9)",
    },
  },
  info: {
    fontSize: "1.8em",
    color: "#222f3e",
    textAlign: "center",
  },
  infoHouse: {
    fontSize: "1.5em",
    color: "#222f3e",
    textAlign: "center",
  },
  media: {
    height: 350,
  },
});

const CardCharacter = ({ student, character }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSelectCharacter = (data) => {
    console.log("data", data);
    dispatch(fetchCaracter(data));
    history.push(`/character`);
  };

  return (
    <Card
      className={classes.card}
      onClick={() => handleSelectCharacter(student ? student : character)}
    >
      <CardMedia
        className={classes.media}
        image={student ? student.image : character.image}
      />
      <CardContent>
        <Typography className={classes.info}>
          {student ? student.name : character.name}
        </Typography>
        <Typography className={classes.infoHouse}>
          {student ? student.house : character.house}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardCharacter;
