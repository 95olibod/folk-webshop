import { useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";
import { movies } from "./movie";

//Component to calculate and show price total
const MoviePriceTotal = () => {
  //Use context
  const { addedMovies } = useContext(MovieContext);

  //Filter movies to know which movies are in cart
  const filteredMovieList = movies.filter((movie) =>
    addedMovies.includes(movie)
  );

  //Calculate quantity of every specific movie in cart
  let addedMoviesList = [];
  for (const item of addedMovies) {
    const movie = filteredMovieList.find((movie) => item.id === movie.id);
    if (movie) {
      addedMoviesList.push(movie);
    }
  }

  //Calculate total price
  let sum = 0;
  for (const item of addedMoviesList) {
    sum += item.price;
  }

  return (
    <div>
      <h4>Totalsumma:</h4>
      <p>{sum} SEK</p>
    </div>
  );
};
export default MoviePriceTotal;
