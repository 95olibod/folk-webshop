import { createContext, FC, useEffect, useState } from "react";

interface ContextValue {
  addedMovies: number[];
  toggleAddedMovies: (id: number) => void;
  decreaseAddedMovies: (id: number) => void;
  deleteFromAddedMovies: (id: number) => void;
}

export const MovieContext = createContext<ContextValue>({
  addedMovies: [],
  toggleAddedMovies: () => {},
  decreaseAddedMovies: () => {},
  deleteFromAddedMovies: () => {},
});

const MovieProvider: FC = (props) => {
  const [addedMovies, setAddedMovies] = useState<number[]>(
    JSON.parse(localStorage.getItem("addedMovies") || "[]")
  );

  const toggleAddedMovies = (id: number) => {
      setAddedMovies([...addedMovies, id]);
  };

  const decreaseAddedMovies = (id: number) => {

      const indexOfMovieToRemove = addedMovies.findIndex(
        (imageId) => imageId === id
      );
      addedMovies.splice(indexOfMovieToRemove, 1);
      setAddedMovies([...addedMovies]);
  };

  const deleteFromAddedMovies = (id: number) => {
    const moviesToSave = addedMovies.filter((movieId) => movieId !== id);
    setAddedMovies(moviesToSave);
  };

  useEffect(() => {
    localStorage.setItem("addedMovies", JSON.stringify(addedMovies));
  }, [addedMovies]);

  return (
    <MovieContext.Provider
      value={{
        addedMovies,
        toggleAddedMovies,
        decreaseAddedMovies,
        deleteFromAddedMovies,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
