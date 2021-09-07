import React, { FC, MouseEventHandler, useContext } from "react";
import Fab from "@material-ui/core/Fab";
import RemoveIcon from "@material-ui/icons/Remove";
import { MovieContext } from "../../../contexts/movieContext";
import { MovieData } from "../movie";

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  movie: MovieData;
}

const DecreaseButton: FC<Props> = ({ onClick, movie }) => {
  const { addedMovies } = useContext(MovieContext);

  const count = addedMovies.filter((obj) => obj === movie.id).length;

  const isOnlyOne = () => {
    if (count <= 1) {
      return true;
    } else {
      return false;
    }
  };

  if (isOnlyOne()) {
    return (
      <Fab color="default" size="small" aria-label="remove">
        <RemoveIcon />
      </Fab>
    );
  } else {
    return (
      <Fab color="default" size="small" aria-label="remove" onClick={onClick}>
        <RemoveIcon />
      </Fab>
    );
  }
};
export default DecreaseButton;
