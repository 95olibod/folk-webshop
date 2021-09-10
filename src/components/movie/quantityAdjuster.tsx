import { Typography } from "@material-ui/core";
import { FC, useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";
import DecreaseButton from "../movie/button/decreaseButton";
import IncreaseButton from "./button/increaseButton";
import { MovieData } from "./movie";
import "../movie/movie.css";

interface Props {
  movie: MovieData;
}

const QuantityAdjuster: FC<Props> = ({ movie }) => {
  const { addedMovies, toggleAddedMovies, decreaseAddedMovies } =
    useContext(MovieContext);

  const count = addedMovies.filter((obj) => obj === movie.id).length;

  return (
    <div className="flex row align-center justify-center">
      <div>
        <DecreaseButton
          movie={movie}
          onClick={() => decreaseAddedMovies(movie.id)}
        />
      </div>
      <div>
        <Typography variant="subtitle1" className="padding-typo">
          {count}
        </Typography>
      </div>
      <div>
        <IncreaseButton onClick={() => toggleAddedMovies(movie.id)} />
      </div>
    </div>
  );
};

export default QuantityAdjuster;
