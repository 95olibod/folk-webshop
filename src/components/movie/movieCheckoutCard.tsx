import Button from "./button/button";
import { MovieData } from "./movie";
import "./movie.css";
import React, { FC } from "react";
import { useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";
import DeleteButton from "../movie/button/deleteButton";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";



interface Props {
  movie: MovieData;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      marginBottom: ".2rem",
      maxWidth: 500,
    },
    image: {
      width: 200,
      height: 200,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    buttSize: {
      width: 30,
      height: 30,
    },
    font: {
      fontWeight: 800,
    },
  })
);


const MovieCheckoutCard: FC<Props> = ({ movie }) => {
  const classes = useStyles();
  const { addedMovies, toggleAddedMovies, deleteFromAddedMovies } = useContext(MovieContext);

  const count = addedMovies.filter((obj) => obj === movie.id).length;
  console.log(count);

  //  const delsumma = movie.price * count;
  //  summa = delsumma + summa;
  //  console.log(movie.price * count);

  //  console.log(summa);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={movie.imageUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.font}
                >
                  {movie.title}
                </Typography>
              </Grid>

              <div className="flex row space-between">
                <div className="flex row">
                  <Fab color="default" size="small" aria-label="remove">
                    <RemoveIcon />
                  </Fab>
                  <p>{count}</p>
                  <Fab color="primary" size="small" aria-label="add">
                    <AddIcon />
                  </Fab>
                </div>
                <DeleteButton onClick={() =>  deleteFromAddedMovies(movie.id)}/>
              </div>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{movie.price} kr</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default MovieCheckoutCard;

/*
const MovieCheckoutCard: FC<Props> = ({ movie }) => {
  const { toggleAddedMovies } = useContext(MovieContext);

  return (
    <div className="movie-checkout-card">
      <img
        className="checkout-image"
        key={movie.id}
        src={movie.imageUrl}
        alt=""
      />
      <p>{movie.price}</p>
      <p>{movie.title}</p>
    </div>
  );
};

export default MovieCheckoutCard;
*/
