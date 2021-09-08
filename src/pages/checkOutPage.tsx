import { MovieContext } from "../contexts/movieContext";
import { useContext } from "react";
import MovieCheckoutCard from "../components/movie/movieCheckoutCard";
import { MovieData, movies } from "../components/movie/movie";
import MoviePriceTotal from "../components/movie/moviePriceTotal";
import CustomerForm from "../components/form/customerForm";
import "../pages/pages.css";

interface Props {
  movie: MovieData;
}

const CheckoutPage = () => {
  const { addedMovies } = useContext(MovieContext);

  const AddedMoviesList = movies.filter((movie) =>
    addedMovies.includes(movie.id)
  );

  return (
    <div>
      <div className="checkout-container">
        <div className="movie-papers">
          {AddedMoviesList.map((movie) => (
            <MovieCheckoutCard key={movie.id} movie={movie} />
          ))}
          ;
        </div>

        <CustomerForm />
      </div>

      <div style={{ color: "red" }}>
        <MoviePriceTotal />
      </div>
    </div>
  );
};

export default CheckoutPage;
