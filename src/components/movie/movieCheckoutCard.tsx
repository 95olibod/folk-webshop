import { createStyles, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { FC, useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";
import DeleteButton from "../movie/button/deleteButton";
import { MovieData } from "./movie";
import "./movie.css";
import QuantityAdjuster from "./quantityAdjuster";

interface Props {
  movie: MovieData;
}

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      width: 200,
      heigth: "auto",
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    font: {
      fontWeight: 800,
    },
    typography: {
      textAlign: "center",
    },
  })
);

const MovieCheckoutCard: FC<Props> = ({ movie }) => {
  const classes = useStyles();
  const { deleteFromAddedMovies } = useContext(MovieContext);

  return (
    <Grid container spacing={3}>
      <Grid item container xs={6} sm={4} spacing={2}>
        <Grid item xs={12} className={classes.image}>
          <img className={classes.img} alt="complex" src={movie.imageUrl} />
        </Grid>
      </Grid>
      <Grid item container xs={12} sm={8} spacing={0}>
        <Grid item xs={10}>
          <Typography variant="subtitle1">{movie.title}</Typography>
          <Typography variant="subtitle2">{movie.price} SEK</Typography>
        </Grid>
        <Grid item xs={2}>
          <DeleteButton onClick={() => deleteFromAddedMovies(movie.id)} />
        </Grid>
        <Grid item container xs={12} alignItems="center">
          <QuantityAdjuster movie={movie} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieCheckoutCard;
