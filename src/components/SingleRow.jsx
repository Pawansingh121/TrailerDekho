import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { searchState } from "../context/Context";

import Player from "./Player";
const SingleRow = ({ title, fetchURL }) => {
  const {
    state: { input },
    dispatch,
  } = searchState();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <h2 className=" text-yellow-400 font-bold md:text-2xl    p-4">{title}</h2>
      <div className=" grid grid-cols-3 md:grid-cols-5  mx-2 gap-2 md:gap-4">
        {movies
          .filter((item) => {
            if (input === "") {
              return item;
            } else if (item.title.toLowerCase().includes(input.toLowerCase())) {
              return item;
            }
          })
          .map((item, id) => {
            return <MovieCard key={id} item={item} />;
          })}
      </div>
    </>
  );
};

export default SingleRow;
