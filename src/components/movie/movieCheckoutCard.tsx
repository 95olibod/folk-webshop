import { createStyles, makeStyles, Theme } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import React, { FC, useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";
import DeleteButton from "../movie/button/deleteButton";
import DecreaseButton from "./button/decreaseButton";
import { MovieData } from "./movie";
import "./movie.css";


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
  const {
    addedMovies,
    toggleAddedMovies,
    decreaseAddedMovies,
    deleteFromAddedMovies,
  } = useContext(MovieContext);

  const count = addedMovies.filter((obj) => obj === movie.id).length;

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
                  <DecreaseButton
                    movie={movie}
                    onClick={() => decreaseAddedMovies(movie.id)}
                  />
                  <p>{count}</p>
                  <Fab color="primary" size="small" aria-label="add">
                    <AddIcon />
                  </Fab>
                </div>
                <DeleteButton onClick={() => deleteFromAddedMovies(movie.id)} />
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
