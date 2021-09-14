import { Grid, Paper} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TotalAndSubmitCard from "../movie/totalAndSubmitCard";
import { CustomerFormValidator } from "./customerFormValidator";
import { inputFieldValues } from "./defaultFieldValues";

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
      padding: "4px !important",
    },

    background: "white",
  },
})(TextField);

const CustomerForm = () => {
  const classes = useStyles();

  const { handleInputValue, formIsValid, errors } =
    CustomerFormValidator();

  return (
    <Grid item container xs={12}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h4>Dina uppgifter</h4>
          <form>
            {inputFieldValues.map((inputFieldValue, index) => {
              return (
                <ValidationTextField
                  className={classes.margin}
                  key={index}
                  onBlur={handleInputValue}
                  onChange={handleInputValue}
                  label={inputFieldValue.label}
                  name={inputFieldValue.name}
                  type={inputFieldValue.type}
                  placeholder={inputFieldValue.placeholder}
                  autoComplete={inputFieldValue.autoComplete}
                  required
                  {...(errors[inputFieldValue.name] && {
                    error: true,
                    helperText: errors[inputFieldValue.name],
                  })}
                />
              );
            })}
          </form>
        </Paper>
            <Paper className={classes.paper}>
          <TotalAndSubmitCard buttonIsDisabled={formIsValid()} />
          </Paper>
      </Grid>
    </Grid>
  );
};

export default CustomerForm;
