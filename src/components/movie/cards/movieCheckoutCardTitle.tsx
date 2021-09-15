import { useContext } from "react";
import { MovieContext } from "../../../contexts/movieContext";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

//Styles for component
const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const MovieCheckoutCardTitle = () => {
  //Use context
  const { countQuantityInAddedMovies } = useContext(MovieContext);

  //Implement styles
  const classes = useStyles();

  //Calculate quantity of movies in cart
  const count = countQuantityInAddedMovies();

  //Check quantity, if quantity is not 0 show cart, if not show other message card
  if (count !== 0) {
    return <h4>Kundkorg</h4>;
  } else {
    return (
      <div>
        <h4>Din varukorg är tom</h4>
        <Link className={classes.link} to="/">
          <p>Klicka här för att gå tillbaka startsidan</p>
        </Link>
      </div>
    );
  }
};

export default MovieCheckoutCardTitle;
