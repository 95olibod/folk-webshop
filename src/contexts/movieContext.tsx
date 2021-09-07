import { createContext, FC, useEffect, useState } from "react";

interface ContextValue {
  addedMovies: number[];
  toggleAddedMovies: (id: number) => void;
  deleteFromAddedMovies: (id: number) => void;
}

export const MovieContext = createContext<ContextValue>({
  addedMovies: [],
  toggleAddedMovies: () => {},
  deleteFromAddedMovies: () => {},
});

const MovieProvider: FC = (props) => {
  const [addedMovies, setAddedMovies] = useState<number[]>(
      JSON.parse(localStorage.getItem("addedMovies") || "[]")
    );

  const toggleAddedMovies = (id: number) => {
    setAddedMovies([...addedMovies, id]);
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
        deleteFromAddedMovies
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;