import { createStyles, makeStyles } from "@material-ui/core";
import { movies } from "../components/movie/movie";
import MovieCard from "../components/movie/movieCard";

const HomePage = () => {
  const useStyles = makeStyles(() =>
    createStyles({
      movieContainer: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        background: "blue",
        justifyContent: "center",
        paddingRight: 20,
        maxWidth: 1500,
      },
      outerDiv: {
        background: "yellow",
        display: "flex",
        justifyContent: "center",
      },
    })
  );

  const classes = useStyles();

  return (
    <div className={classes.outerDiv}>
      <div className={classes.movieContainer}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
