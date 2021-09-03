import Button from "./button/button";
import { MovieData } from "./movie";
import "./movie.css";
import React, { FC } from "react";
import { useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";

interface Props {
  movie: MovieData;
}

const MovieDetailCard: FC<Props> = ({ movie }) => {
  const { toggleAddedMovies } = useContext(MovieContext);

  return (
    <div className="movie-details-card">
      <img
        className="details-image"
        key={movie.id}
        src={movie.imageUrl}
        alt=""
      />
      <p>{movie.price}</p>
      <p>{movie.title}</p>
      <p>{movie.storyline}</p>
      <Button onClick={() => toggleAddedMovies(movie.id)}></Button>
    </div>
  );
};

export default MovieDetailCard;
