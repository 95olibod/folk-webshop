import Button from "./button/button";
import { MovieData } from "./movie";
import "./movie.css";
import React, { FC } from "react";
import { useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";

interface Props {
  movie: MovieData;
}

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
