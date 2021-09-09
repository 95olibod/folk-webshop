import { movies } from "../components/movie/movie";
import MovieCard from "../components/movie/movieCard";
import "./pages.css"

const HomePage = () => {
  return (
    <div className="outerDiv">
      <div className="movieContainer">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
