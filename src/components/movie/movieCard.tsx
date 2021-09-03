import Button from "./button/button";
import { MovieData } from "./movie";
import "./movie.css";
import React, { FC } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";

interface Props {
  movie: MovieData;
}

const MovieCard: FC<Props> = ({ movie }) => {
  //SKRIV OM TILL REM ISTÄLLET FÖR PX "2rem"
  const useStyles = makeStyles(() =>
    createStyles({
      image: { width: "200px", cursor: "pointer" },

      movieBox: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        background: "gray",
        width: 450,
        marginTop: 20,
        marginLeft: 20,
        // marginRight: 20,
      },
    })
  );

  //TODO
  const { addedMovies, toggleAddedMovies } = useContext(MovieContext);

  const classes = useStyles();
  return (
    <div className={classes.movieBox}>
      <img
        className={classes.image}
        key={movie.id}
        src={movie.imageUrl}
        alt=""
      />
      <p>{movie.price}</p>
      <p>{movie.title}</p>
      {/* <Button onClick={() => addedMovies.includes(movie.id)}></Button> */}
      <Button onClick={() => toggleAddedMovies(movie.id)}></Button>
    </div>
  );
};

export default MovieCard;
