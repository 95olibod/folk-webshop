import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme
} from "@material-ui/core";
import { useContext } from "react";
import CustomerForm from "../components/form/customerForm";
import { movies } from "../components/movie/movie";
import MovieCheckoutCard from "../components/movie/movieCheckoutCard";
import TotalAndSubmitCard from "../components/movie/totalAndSubmitCard";
import { MovieContext } from "../contexts/movieContext";
import "../pages/pages.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      marginTop: 0,
      marginBottom: "0.2rem",
      marginRight: "0.2rem"
    },
  })
);

const CheckoutPage = () => {
  const classes = useStyles();
  const { addedMovies } = useContext(MovieContext);

  const AddedMoviesList = movies.filter((movie) =>
    addedMovies.includes(movie.id)
  );

  return (
      <Grid container xs={12} spacing={0} justifyContent="center">
        <Grid item xs={9} sm={8} md={5}>
          <Paper className={classes.paper}>
            <h4>Kundkorg</h4>
            {AddedMoviesList.map((movie) => (
              <MovieCheckoutCard key={movie.id} movie={movie} />
            ))}
          </Paper>
        </Grid>
        <Grid item xs={9} sm={8} md={5}>
          <Paper className={classes.paper}>
            <h4>Dina uppgifter</h4>
            <CustomerForm />
          </Paper>
          <Paper className={classes.paper}>
            <TotalAndSubmitCard />
          </Paper>
        </Grid>
      </Grid>
  );
};

export default CheckoutPage;
