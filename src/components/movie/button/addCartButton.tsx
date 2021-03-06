import { FC, MouseEventHandler } from "react";
import Button from "@material-ui/core/Button";

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

//Button component for adding item to cart
const AddCartButton: FC<Props> = ({ onClick }) => {
  return (
    <Button
      className="shoppingcart"
      variant="contained"
      color="primary"
      onClick={onClick}
    >
      Lägg i varukorg
    </Button>
  );
};

export default AddCartButton;
