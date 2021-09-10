import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const SubmitCheckoutButton= () => {
  return (
    <Button
      variant="contained"
      color="default"
      size="medium"
    >
        <Link to="/"></Link>
      Bekräfta beställning
    </Button>
  );
};

export default SubmitCheckoutButton;