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
      <div className="w-full h-full hover:scale-105 transition-all relative  ">
        <img
          className=" rounded-xl"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt=""
        />
        <p className="text-white text-center text-sm md:text-xl">
          {item.title}
        </p>

        <div className="h-full w-full   text-white flex items-center justify-center ">
          <BsPlayCircle
            onClick={() => handleClick(item)}
            className="cursor-pointer absolute top-[35%] md:top-[20%] lg:top-[30%]  text-2xl "
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
              className="text-red-600 cursor-pointer absolute right-2 top-2 "
            />
          ) : (
            <AiOutlineHeart
              onClick={() => {
                dispatch({
                  type: "addWatchlist",
                  payload: item,
                });
              }}
              className="text-white text-xl  cursor-pointer absolute right-2 top-2"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
