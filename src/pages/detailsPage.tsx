import { MovieContext } from "../contexts/movieContext";
import { useContext } from "react";
import MovieDetailCard from "../components/movie/movieDetailCard";
import { movies } from "../components/movie/movie";

const DetailsPage = () => {
  const { addedMovies } = useContext(MovieContext);

  //CHANGE FROM ADDEDMOVIES TO MOVIE ARRAY IN MOVIE.ts
  const AddedMoviesList = movies.filter((movie) =>
    addedMovies.includes(movie.id)
  );

  return (
    <div>
      {AddedMoviesList.map((movie) => (
        <MovieDetailCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default DetailsPage;
