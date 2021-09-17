import { Grid, Paper} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TotalAndSubmitCard from "../movie/cards/totalAndSubmitCard";

//Styles for component

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginTop: 0,
    marginBottom: "0.2rem",
    marginRight: "0.2rem",
  },
}));

//Styles for the textfields in form

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

//Form component

const CustomerForm = () => {

  //Implement styles
  const classes = useStyles();



  return (
    <Grid item container xs={12}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h4>Dina uppgifter</h4>
          <form>
            EDIT
          </form>
        </Paper>
            <Paper className={classes.paper}>
          </Paper>
      </Grid>
    </Grid>
  );
};

export default CustomerForm;
