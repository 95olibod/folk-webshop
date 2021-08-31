import React, { FC, MouseEventHandler } from "react";
//import './cart-btn.css';
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& > *": {
                margin: theme.spacing(1),
            },
        },
    })
);

const AddCartButton: FC<Props> = ({ onClick }) => {
    return (
        <Button
            className="shoppingcart"
            variant="contained"
            color="primary"
            onClick={onClick}
        >
            Click Me!
        </Button>
    );
};

export default AddCartButton;
