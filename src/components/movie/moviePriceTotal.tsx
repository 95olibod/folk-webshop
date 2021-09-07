import { FC, useContext } from "react";
import { MovieContext } from "../../contexts/movieContext";
import { MovieData } from "./movie";

interface Props {
    movie: MovieData;
  }

const MoviePriceTotal: FC<Props> = ({ movie }) => {
    const { addedMovies } = useContext(MovieContext);
    let summa = 0;
    for (const item of addedMovies) {
      if (item === movie.id) {
        summa += movie.price;
      }
    }
  
    return (
        <p>summan : {summa}</p>
    );
  };
  export default MoviePriceTotal;