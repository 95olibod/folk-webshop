import { useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";
import { movies } from "./movie";

const MoviePriceTotal = () => {
  const { addedMovies } = useContext(MovieContext);

  const filteredMovieList = movies.filter((movie) =>
    addedMovies.includes(movie.id)
  );

  let addedMoviesList = [];
  for (const item of addedMovies) {
    const movie = filteredMovieList.find((movie) => item === movie.id);
    if (movie) {
      addedMoviesList.push(movie);
    }
  }

  let sum = 0;
  for (const item of addedMoviesList) {
    sum += item.price;
  }

  return (
    <div>
      <h4>Summa:</h4>
      <p>{sum} SEK</p>
    </div>
  );
};
export default MoviePriceTotal;
