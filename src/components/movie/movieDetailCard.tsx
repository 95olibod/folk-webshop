import { MovieData } from "./movie";
import "./movie.css";
import { FC } from "react";

interface Props {
  movie: MovieData;
}

const MovieDetailCard: FC<Props> = ({ movie }) => {
  
  return (
      <div className="movie-details-card">
          <img
              className="details-image"
              key={movie.id}
              src={movie.imageUrl}
              alt=""
          />
          <p>{movie.title}</p>
          <p>{movie.price}</p>
          <p>{movie.realeseYear}</p>
          <p>{movie.duration}</p>
          <p>{movie.storyline}</p>
      </div>
  );
};

export default MovieDetailCard;
