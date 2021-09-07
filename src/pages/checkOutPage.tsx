import { MovieContext } from "../contexts/movieContext";
import { useContext } from "react";
import MovieCheckoutCard from "../components/movie/movieCheckoutCard";
import { MovieData, movies } from "../components/movie/movie";
import MoviePriceTotal from "../components/movie/moviePriceTotal";
import CustomerForm from "../components/form/custumerForm";


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
       <div style={{color: "red"}}>
      <MoviePriceTotal/>
    </div>    
    <CustomerForm/>
    </div>
  );
};

export default CheckoutPage;
