import { createContext, FC, useEffect, useState } from "react";

interface ContextValue {
  addedMovies: number[];
  toggleAddedMovies: (id: number) => void;
}

export const MovieContext = createContext<ContextValue>({
  addedMovies: [],
  toggleAddedMovies: () => {},
});

const MovieProvider: FC = (props) => {
  const [addedMovies, setAddedMovies] = useState(
      JSON.parse(localStorage.getItem("addedMovies") || "[]")
    );

  const toggleAddedMovies = (id: number) => {
    setAddedMovies([...addedMovies, id]);
  };

  useEffect(() => {
    localStorage.setItem("addedMovies", JSON.stringify(addedMovies));
  }, [addedMovies]);

  return (
    <MovieContext.Provider
      value={{
        addedMovies,
        toggleAddedMovies,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;