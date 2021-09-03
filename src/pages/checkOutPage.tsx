import { MovieContext } from "../contexts/movieContext";
import { useContext } from "react";
import MovieCard from "../components/movie/movieCard";
import { movies } from "../components/movie/movie";


const CheckoutPage = () => {
const { addedMovies } = useContext(MovieContext);



const AddedMoviesList = movies.filter(movie =>
    addedMovies.includes(movie.id));

    return (
        <div>
            CheckoutPage

            {
                AddedMoviesList.map(movie => <MovieCard key={movie.id} movie={movie}/>)
            }
            
            </div>
    )
}

export default CheckoutPage;
