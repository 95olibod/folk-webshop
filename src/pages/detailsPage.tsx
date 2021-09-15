import MovieDetailCard from "../components/movie/cards/movieDetailCard";
import { MovieData, movies } from "../components/movie/movie";
import { RouteComponentProps } from "react-router-dom";
import "./pages.css"

interface Props {
  movie: MovieData;
}

interface Props extends RouteComponentProps<{ id: string }> {}

//Finds movie which matches the one clicked 
const DetailsPage = ({ match }: Props) => {

  //Get id from url
  const id = parseInt(match.params.id);

  //Get the clicked movie by id
  const movieItem = movies.filter((movieItem) => movieItem.id === id);

  return (
    <div className="detail-card">
      {movieItem.map((movie) => (
        <MovieDetailCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
export default DetailsPage;
