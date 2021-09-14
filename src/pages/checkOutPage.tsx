import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";
import { useContext } from "react";
import CustomerForm from "../components/form/customerForm";
import { movies } from "../components/movie/movie";
import MovieCheckoutCard from "../components/movie/movieCheckoutCard";
import MovieCheckoutCardTitle from "../components/movie/movieCheckoutCardTitle";
import { MovieContext } from "../contexts/movieContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      marginTop: 0,
      marginBottom: "0.2rem",
      marginRight: "0.2rem",
    },
  })
);

const CheckoutPage = () => {
  const classes = useStyles();
  const { addedMovies } = useContext(MovieContext);

  var AddedMoviesList = movies.filter((movie) =>
    addedMovies.includes(movie.id)
  );

  console.log(addedMovies);

  const count = addedMovies.length;

  if (count !== 0) {
    return (
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={9} sm={8} md={5}>
          <Paper className={classes.paper}>
            <MovieCheckoutCardTitle />
            {AddedMoviesList.map((movie) => (
              <MovieCheckoutCard key={movie.id} movie={movie} />
            ))}
          </Paper>
        </Grid>
        <Grid item xs={9} sm={8} md={5}>
          <CustomerForm />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={9} sm={8} md={5}>
          <Paper className={classes.paper}>
            <MovieCheckoutCardTitle />
            {AddedMoviesList.map((movie) => (
              <MovieCheckoutCard key={movie.id} movie={movie} />
            ))}
          </Paper>
        </Grid>
      </Grid>
    );
  }
};

export default CheckoutPage;
