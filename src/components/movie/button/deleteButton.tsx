import React, { FC, MouseEventHandler } from "react";

import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";


interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const DeleteButton: FC<Props> = ({ onClick }) => {
  return (
    <div>
    <Grid item>
      <IconButton aria-label="delete" onClick={onClick}>
        <DeleteIcon />
      </IconButton>
    </Grid>
  </div>
    
  );
};

export default DeleteButton;
