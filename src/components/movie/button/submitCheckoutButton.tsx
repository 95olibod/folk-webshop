import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { FC } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "inherit"
  },
}));

interface props {
  isDisabled: boolean | "";
}

//Button component for submitting/confirm order
const SubmitCheckoutButton: FC<props> = ({ isDisabled })  => {

  const classes = useStyles();

  return (
    <Button variant="contained" color="default" size="medium" disabled={!isDisabled}>
      <Link to="/confirmation" className={classes.link}>Bekräfta beställning</Link>
    </Button>
  );
};

export default SubmitCheckoutButton;
