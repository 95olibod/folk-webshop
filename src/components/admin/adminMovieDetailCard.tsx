import { MovieData } from "../movie/movie";
import "../movie/movie.css";
import { FC, useContext, useState } from "react";
import {
  Button,
  createStyles,
  makeStyles,
  Paper,
  Snackbar,
  Theme,
} from "@material-ui/core";
import { MovieContext } from "../../contexts/movieContext";
import AddCartButton from "./editMovieButton";
import { Link } from "react-router-dom";

interface Props {
  movie: MovieData;
}

//Component styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      marginBottom: "0.5rem",
      maxWidth: 500,
      marginRight: "0.5rem",
      marginLeft: "0.5rem",
    },
  })
);

//Displays detail information on a specific movie
const AdminMovieDetailCard: FC<Props> = ({ movie }) => {

  //Implement styles
  const classes = useStyles();

  //Use context
  const { addToAddedMovies } = useContext(MovieContext);

  

  //opens optional edits
  const handleClick = (movie: MovieData) => {
   //metod som redigerar och visar en save button
  };

  return (
    <Paper className={classes.paper}>
      <div className="top-container">
        <div className="details-image-box">
          <img
            className="details-image"
            key={movie.id}
            src={movie.imageUrl}
            alt=""
          />
        </div>
        <div className="info-container">
          <h3 className="details-h3">Titel</h3>
          <p className="details-p">{movie.title}</p>
          <h3 className="details-h3">Lanseringsår</h3>
          <p className="details-p">{movie.releaseYear}</p>
          <h3 className="details-h3">Speltid</h3>
          <p className="details-p">{movie.duration} min</p>
          <h3 className="details-h3">Pris</h3>
          <p className="details-p"> {movie.price} SEK</p>
        </div>
      </div>
      <h3 className="details-h3">Handling</h3>
      <p className="storyline-p">{movie.storyline}</p>
      <div className="flex space-between">
        <AddCartButton onClick={() => handleClick(movie)} />
      </div>
    </Paper>
  );
};

export default AdminMovieDetailCard;