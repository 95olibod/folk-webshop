import { MovieContext } from "../contexts/movieContext";
import { useContext } from "react";
import MovieCheckoutCard from "../components/movie/movieCheckoutCard";
import { movies } from "../components/movie/movie";

const CheckoutPage = () => {
  const { addedMovies } = useContext(MovieContext);

  const AddedMoviesList = movies.filter((movie) =>
    addedMovies.includes(movie.id)
  );

  return (
    <div>
      {AddedMoviesList.map((movie) => (
        <MovieCheckoutCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default CheckoutPage;
