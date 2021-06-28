import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function UnityForm() {
  const classes = useStyles();
  return (
    <div>
      <h1>
        Welcome to the game
        <br /> Urban Joy!
      </h1>
      <h3>
        This game was developed as part of a bachelor project at the German
        University in Cairo in 2021. If you consent to it, your game performance
        will be collected and analysed for educational purposes. Please fill in
        the following form to start playing.
      </h3>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
      </form>
    </div>
  );
}

export default UnityForm;
