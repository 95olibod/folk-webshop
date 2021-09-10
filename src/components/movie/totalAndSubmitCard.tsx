import { Grid } from "@material-ui/core";
import SubmitCheckoutButton from "./button/submitCheckoutButton";
import MoviePriceTotal from "./moviePriceTotal";

const TotalAndSubmitCard = () => {

  return (
    <Grid container xs={12}>
      <Grid item container xs={6}>
        <Grid item xs={12}>
          <MoviePriceTotal />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <SubmitCheckoutButton />
      </Grid>
    </Grid>
  );
};

export default TotalAndSubmitCard;
