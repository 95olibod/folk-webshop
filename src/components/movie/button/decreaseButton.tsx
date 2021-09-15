import React, { FC, MouseEventHandler, useContext } from "react";
import Fab from "@material-ui/core/Fab";
import RemoveIcon from "@material-ui/icons/Remove";
import { MovieContext } from "../../../contexts/movieContext";
import { MovieData } from "../movie";

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  movie: MovieData;
}

//Button component for decreasing quantity of item in cart
const DecreaseButton: FC<Props> = ({ onClick, movie }) => {
  const { addedMovies } = useContext(MovieContext);

  //Calculate quantity
  const count = addedMovies.filter((obj) => obj === movie.id).length;

  //Check if quantity of specific item in cart is only one
  const isOnlyOne = () => {
    if (count <= 1) {
      return true;
    } else {
      return false;
    }
  };

  //If quantity is only one, the decrease button becomes unclickable.
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
