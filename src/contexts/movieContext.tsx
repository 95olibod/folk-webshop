import { createContext, FC, useEffect, useState } from "react";
import { MovieData } from "../components/movie/movie";

interface ContextValue {
  addedMovies: MovieData[];
  addToAddedMovies: (movie: MovieData) => void;
  decreaseAddedMovies: (movie: MovieData) => void;
  deleteFromAddedMovies: (movie: MovieData) => void;
  countQuantityOfAddedMovie: (movie: MovieData) => number;
  countQuantityInAddedMovies: () => number;
}

//Define and export context functions
export const MovieContext = createContext<ContextValue>({
  addedMovies: [],
  addToAddedMovies: () => {},
  decreaseAddedMovies: () => {},
  deleteFromAddedMovies: () => {},
  countQuantityOfAddedMovie: () => 0,
  countQuantityInAddedMovies: () => 0,
});

//Provider of movies
const MovieProvider: FC = (props) => {
  
  //Define state
  const [addedMovies, setAddedMovies] = useState<MovieData[]>(
    JSON.parse(localStorage.getItem("addedMovies") || "[]")
  );

  //Add movie
  const addToAddedMovies = (movie: MovieData) => {
    setAddedMovies([...addedMovies, movie]);
  };

  //Decrease qauntity of movie added
  const decreaseAddedMovies = (movie: MovieData) => {
    const indexOfMovieToRemove = addedMovies.findIndex(
      (imageId) => imageId.id === movie.id
    );
    addedMovies.splice(indexOfMovieToRemove, 1);
    setAddedMovies([...addedMovies]);
  };

  //Delete movie by id
  const deleteFromAddedMovies = (movie: MovieData) => {
    const moviesToSave = addedMovies.filter((movieId) => movieId.id !== movie.id);
    setAddedMovies(moviesToSave);
  };

  //Count quantity of specific movie added
  const countQuantityOfAddedMovie = (movie: MovieData) => {
    const count = addedMovies.filter((obj) => obj.id === movie.id).length;
    return count;
  };

  //Count quantity of all added movies
  const countQuantityInAddedMovies = () => {
    const count = addedMovies.length;
    return count;
  };

  //Fill local storage with added movies
  useEffect(() => {
    localStorage.setItem("addedMovies", JSON.stringify(addedMovies));
  }, [addedMovies]);

  return (
    <MovieContext.Provider
      value={{
        addedMovies,
        addToAddedMovies,
        decreaseAddedMovies,
        deleteFromAddedMovies,
        countQuantityOfAddedMovie,
        countQuantityInAddedMovies,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
