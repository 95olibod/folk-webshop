import React, { FC, MouseEventHandler } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const IncreaseButton: FC<Props> = ({ onClick }) => {
  return (
    <Fab color="primary" size="small" aria-label="add" onClick={onClick}>
      <AddIcon />
    </Fab>
  );
};

export default IncreaseButton;
