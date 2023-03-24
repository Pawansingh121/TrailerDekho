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
      <div className="hover:scale-105 transition-all relative ">
        <img
          className=" rounded-xl"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt=""
        />
        <p className="text-white text-center text-sm md:text-xl">
          {item.title}
        </p>

        <div className="h-full w-full absolute top-0 left-0  text-white flex items-center justify-center ">
          <BsPlayCircle
            onClick={() => handleClick(item)}
            className="cursor-pointer"
            size={30}
          />
          {watchlist.some((p) => p.id === item.id) ? (
            <AiFillHeart
              onClick={() => {
                dispatch({
                  type: "removeWatchlist",
                  payload: item,
                });
              }}
              size={24}
              className="text-red-600 cursor-pointer absolute top-2 right-4"
            />
          ) : (
            <AiOutlineHeart
              onClick={() => {
                dispatch({
                  type: "addWatchlist",
                  payload: item,
                });
              }}
              size={24}
              className="text-white absolute cursor-pointer top-2 right-4"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
