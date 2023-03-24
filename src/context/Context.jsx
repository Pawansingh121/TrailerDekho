import React, { createContext, useContext, useReducer } from "react";
import { movieReducer } from "./Reducer";

const Movie = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, {
    input: "",
    watchlist: [],
  });

  return (
    <Movie.Provider value={{ state, dispatch }}>{children}</Movie.Provider>
  );
};

export default Context;
export const searchState = () => {
  return useContext(Movie);
};
