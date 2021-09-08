import Button from "./button/button";
import { MovieData } from "./movie";
import "./movie.css";
import { FC } from "react";
import { useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";
import { Link } from "react-router-dom";

interface Props {
    movie: MovieData;
}

const MovieCard: FC<Props> = ({ movie }) => {
    const { toggleAddedMovies } = useContext(MovieContext);
    const url = `/details/${movie.id}`;

    return (
        <div className="movie-homepage-card">
            <Link to={url}>
                <img
                    className="homepage-image"
                    key={movie.id}
                    src={movie.imageUrl}
                    alt=""
                />
            </Link>
            <p>{movie.price}</p>
            <p>{movie.title}</p>
            <Button onClick={() => toggleAddedMovies(movie.id)}></Button>
        </div>
    );
};

export default MovieCard;
