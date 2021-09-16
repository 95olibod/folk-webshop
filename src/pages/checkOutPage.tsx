import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";
import { useContext } from "react";
import CustomerForm from "../components/form/customerForm";
import { movies, MovieData } from "../components/movie/movie";
import MovieCheckoutCard from "../components/movie/cards/movieCheckoutCard";
import MovieCheckoutCardTitle from "../components/movie/cards/movieCheckoutCardTitle";
import { MovieContext } from "../contexts/movieContext";

//Component styles
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
  //Implement styles
  const classes = useStyles();

  //Use context
  const { addedMovies, countQuantityInAddedMovies} = useContext(MovieContext);

  //Filter movies to know which movies are in cart
  // const filterAddedMoviesList = addedMovies.filter((movie => movies.includes(movie)))
  
  const filterAddedMoviesList = addedMovies.filter((movie) => movies.includes(movie));
  
  
  let result = addedMovies.reduce(function (r, a) {
    r[a.id] = r[a.id] || [];
    r[a.id].push(a);
    return r;
  }, [Object.create(null)]);
  
  console.log(result)
  

  // const filterAddedMoviesList = movies.filter((movie => addedMovies.includes(movie));

  
  //Calculate quantity of movies in cart
  const count = countQuantityInAddedMovies();
  
  //If quantity of movies is not 0 display all cards, else hide form and submit cards
  if (count !== 0) {
    return (
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={9} sm={8} md={5}>
          <Paper className={classes.paper}>
            <MovieCheckoutCardTitle />
            {filterAddedMoviesList.map((movie) => (
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
            {filterAddedMoviesList.map((movie) => (
              <MovieCheckoutCard key={movie.id} movie={movie} />
            ))}
          </Paper>
        </Grid>
      </Grid>
    );
  }
};

export default CheckoutPage;
