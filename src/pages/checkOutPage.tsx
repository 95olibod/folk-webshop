import { MovieContext } from "../contexts/movieContext";
import { useContext } from "react";
import MovieCheckoutCard from "../components/movie/movieCheckoutCard";
import { MovieData, movies } from "../components/movie/movie";
import MoviePriceTotal from "../components/movie/moviePriceTotal";

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
      {AddedMoviesList.map((movie) => (
        <MovieCheckoutCard key={movie.id} movie={movie} />
        ))};
         {AddedMoviesList.map((movie) => (
        <MoviePriceTotal key={movie.id} movie={movie} />
        ))};
        
       
     
    </div>
  );
};

export default CheckoutPage;
