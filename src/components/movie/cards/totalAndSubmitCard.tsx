import { Grid } from "@material-ui/core";
import { FC } from "react";
import SubmitCheckoutButton from "../button/submitCheckoutButton";
import MoviePriceTotal from "../moviePriceTotal";

interface props {
  buttonIsDisabled: boolean | "";
}

//Component for showing price total and submit button
const TotalAndSubmitCard: FC<props> = ({ buttonIsDisabled }) => {
  return (
    <Grid container>
      <Grid item container xs={6}>
        <Grid item xs={12}>
          <MoviePriceTotal />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <SubmitCheckoutButton isDisabled={buttonIsDisabled} />
      </Grid>
    </Grid>
  );
};

export default TotalAndSubmitCard;
