import React from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";
import { searchState } from "../context/Context";

const MovieCard = ({ item, handleClick, movies }) => {
  const {
    state: { watchlist },
    dispatch,
  } = searchState();

  return (
    <>
      <div className="relative hover:scale-105  transition-all ">
        <img
          onClick={() => handleClick(item)}
          className=" rounded-xl cursor-pointer"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt=""
        />
        <p className="text-white text-center text-sm md:text-xl ">
          {item.title}
        </p>

        <div className="h-full w-full  text-white flex items-center justify-center ">
          {watchlist.some((p) => p.id === item.id) ? (
            <AiFillHeart
              onClick={() => {
                dispatch({
                  type: "removeWatchlist",
                  payload: item,
                });
              }}
              size={24}
              className="text-red-600 absolute top-1 right-3 text-xl md:text-2xl"
            />
          ) : (
            <AiOutlineHeart
              onClick={() => {
                dispatch({
                  type: "addWatchlist",
                  payload: item,
                });
              }}
              className="text-white absolute top-1 right-2 text-xl md:text-2xl"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
