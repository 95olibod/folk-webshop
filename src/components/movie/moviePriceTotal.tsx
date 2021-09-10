import { useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";
import { movies } from "./movie";

const MoviePriceTotal = () => {
  const { addedMovies } = useContext(MovieContext);

  const AddedMoviesList = movies.filter((movie) =>
    addedMovies.includes(movie.id)
  );

  let newArray = [];
  for (const item of addedMovies) {
    const arr = AddedMoviesList.find((movie) => item === movie.id);
    if (arr) {
      newArray.push(arr);
    }
  }

  let e = 0;
  for (const item of newArray) {
    e += item.price;
  }

  return (
    <p>
      <h4>Summa:</h4> {e} SEK
    </p>
  );
};
export default MoviePriceTotal;
