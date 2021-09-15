import React, { FC, MouseEventHandler } from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import IconButton from "@material-ui/core/IconButton";


interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

//Button component to delete item from cart
const DeleteButton: FC<Props> = ({ onClick }) => {
  return (
    <div>
      <IconButton aria-label="delete" onClick={onClick}>
        <DeleteForeverOutlinedIcon />
      </IconButton>
    </div>
  );
};

export default DeleteButton;
