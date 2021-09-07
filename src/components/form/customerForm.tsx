import Paper from '@material-ui/core/Paper';
import {
    makeStyles,
    withStyles
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from 'react';
import "./customerForm.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
      paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
  margin: {
    margin: theme.spacing(1),
  },
}));

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },

    background: "white",
  },
})(TextField);

const CustomerForm = () => {
  const classes = useStyles();

  return (
    <div>
    <Paper className={classes.paper}>
      <form className={classes.root} noValidate>
        <ValidationTextField
          className={classes.margin}
          label="Namn"
          required
          variant="outlined"
          id="validation-outlined-input"
        />
        <ValidationTextField
          className={classes.margin}
          label="Efternamn"
          required
          variant="outlined"
          id="validation-outlined-input"
        />
        <ValidationTextField
          className={classes.margin}
          type="email"  
          label="Email"
          required
          variant="outlined"
          id="validation-outlined-input"
        />
        <ValidationTextField
          className={classes.margin}
          label="Mobilnummer"
          required
          variant="outlined"
          id="validation-outlined-input"
        />
        <ValidationTextField
          className={classes.margin}
          label="Postnummer"
          required
          variant="outlined"
          id="validation-outlined-input"
        />
        <ValidationTextField
          className={classes.margin}
          label="Address"
          required
          variant="outlined"
          id="validation-outlined-input"
        />
      </form>
      </Paper>
    </div>
  );
};

export default CustomerForm;
