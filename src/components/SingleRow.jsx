import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { searchState } from "../context/Context";

import YouTube from "react-youtube";
const SingleRow = ({ title, fetchURL }) => {
  const {
    state: { input },
    dispatch,
  } = searchState();
  const opts = {
    width: "340",
    height: "340",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");
  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);
  const handleClick = async (item) => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${item.id}?api_key=32b8e2b266a7ab1e2bc2e1afc3288b77&append_to_response=videos`
      )
      .then((res) => {
        setTrailer(res.data.videos.results[0].key);
      });
  };

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
            return <MovieCard key={id} item={item} handleClick={handleClick} />;
          })}
        {trailer && (
          <div className="w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed z-50  ">
            <div className="w-[100vw] h-[100vh]  top-0 left-0 right-0 bottom-0 fixed  bg-gray-200 bg-opacity-50">
              <div className="flex flex-col gap-2 justify-center items-center   w-full h-screen   rounded-xl">
                <YouTube videoId={trailer} opts={opts} />
                <button
                  onClick={() => {
                    setTrailer(!trailer);
                  }}
                  className="bg-red-500 text-white px-3 py-1 hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleRow;
