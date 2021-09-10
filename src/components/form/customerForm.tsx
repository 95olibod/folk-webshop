import { Grid } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./customerForm.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
      <Grid item container xs={12}>
        <Grid item xs={12}>
        <form noValidate autoComplete="on">
          <ValidationTextField
            className={classes.margin}
            label="För- & Efternamn"
            name="name"
            required
            variant="outlined"
            id="validation-outlined-input"
            autoComplete="name"
          />

          <ValidationTextField
            className={classes.margin}
            label="Adress"
            name="ship-address"
            required
            variant="outlined"
            id="validation-outlined-input"
            autoComplete="shipping street-address"
          />

          <ValidationTextField
            className={classes.margin}
            label="Postnummer"
            name="ship-zip"
            required
            variant="outlined"
            id="validation-outlined-input"
            autoComplete="shipping postal-code"
          />
          <ValidationTextField
            className={classes.margin}
            label="Stad"
            name="ship-city"
            required
            variant="outlined"
            id="validation-outlined-input"
            autoComplete="shipping locality"
          />
          <ValidationTextField
            className={classes.margin}
            type="email"
            label="Email"
            name="email"
            required
            variant="outlined"
            id="validation-outlined-input"
            autoComplete="email"
          />
          <ValidationTextField
            className={classes.margin}
            label="Mobilnummer"
            name="mobile"
            required
            variant="outlined"
            id="validation-outlined-input"
            autoComplete="tel"
          />
        </form>
        </Grid>
      </Grid>
  );
};

export default CustomerForm;
