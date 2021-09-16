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

//Component to make a quantity adjuster bar in cart
const QuantityAdjuster: FC<Props> = ({ movie }) => {
  //Use context
  const {
    addToAddedMovies,
    decreaseAddedMovies,
    countQuantityOfAddedMovie,
  } = useContext(MovieContext);

  //Calculate quantity for typography display
  const count = countQuantityOfAddedMovie(movie);

  return (
    <div className="flex row align-center justify-center">
      <div>
        <DecreaseButton
          movie={movie}
          onClick={() => decreaseAddedMovies(movie)}
        />
      </div>
      <div>
        <Typography variant="subtitle1" className="padding-typo">
          {count}
        </Typography>
      </div>
      <div>
        <IncreaseButton onClick={() => addToAddedMovies(movie)} />
      </div>
    </div>
  );
};

export default QuantityAdjuster;
