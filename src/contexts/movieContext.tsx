import { createContext, FC, useEffect, useState } from "react";

interface ContextValue {
  addedMovies: number[];
  addToAddedMovies: (id: number) => void;
  decreaseAddedMovies: (id: number) => void;
  deleteFromAddedMovies: (id: number) => void;
}

//Define and export context functions
export const MovieContext = createContext<ContextValue>({
  addedMovies: [],
  addToAddedMovies: () => {},
  decreaseAddedMovies: () => {},
  deleteFromAddedMovies: () => {},
});

//Provider of movies
const MovieProvider: FC = (props) => {

  //Define state
  const [addedMovies, setAddedMovies] = useState<number[]>(
    JSON.parse(localStorage.getItem("addedMovies") || "[]")
  );

  //Add movie
  const addToAddedMovies = (id: number) => {
    setAddedMovies([...addedMovies, id]);
  };

  //Decrease qauntity of movie added
  const decreaseAddedMovies = (id: number) => {
    const indexOfMovieToRemove = addedMovies.findIndex(
      (imageId) => imageId === id
    );
    addedMovies.splice(indexOfMovieToRemove, 1);
    setAddedMovies([...addedMovies]);
  };

  //Delete movie by id
  const deleteFromAddedMovies = (id: number) => {
    const moviesToSave = addedMovies.filter((movieId) => movieId !== id);
    setAddedMovies(moviesToSave);
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
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
