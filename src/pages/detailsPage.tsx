import MovieDetailCard from "../components/movie/movieDetailCard";
import { MovieData, movies } from "../components/movie/movie";
import { RouteComponentProps } from "react-router-dom";
import { CSSProperties } from "react";

interface Props {
  movie: MovieData;
}

interface Props extends RouteComponentProps<{ id: string }> {}

const DetailsPage = ({ match }: Props) => {
  const id = parseInt(match.params.id);
  const movieItem = movies.filter((movieItem) => movieItem.id === id);

  return (
    <div style={style}>
      {movieItem.map((movie) => (
        <MovieDetailCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const style: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default DetailsPage;
