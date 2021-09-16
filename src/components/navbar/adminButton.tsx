import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./adminButton.css";

//Button component for routing to admin page
const AdminButton = () => {
    return (
        <Button variant="contained" color="primary">
            <Link to="/admin" className="link">Admin</Link>
        </Button>
    );
};

export default AdminButton;
