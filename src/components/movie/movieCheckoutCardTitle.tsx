import { useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";
import { Link } from "react-router-dom";

const MovieCheckoutCardTitle = () => {
  const { addedMovies } = useContext(MovieContext);

  const count = addedMovies.length;

  if(count !== 0) {

      return( <h4>Kundkorg</h4>);
  }

  else {
      return(
      <div>
      <h4>Din varukorg är tom</h4>
      <Link to="/">
        <p>Gå tillbaka till startsidan för mer shopping</p>
        </Link>
      </div>
        );
  }

};

export default MovieCheckoutCardTitle;
