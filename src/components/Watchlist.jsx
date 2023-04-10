import React from "react";
import { searchState } from "../context/Context";
import { CgSmileSad } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const Watchlist = () => {
  const {
    state: { watchlist },
    dispatch,
  } = searchState();
  return (
    <>
      {watchlist.length > 0 ? (
        <div className="w-full min-h-screen max-h-full pt-[100px]">
          <h2 className="text-white text-3xl font-semibold pl-[40px] ">
            Your Watchlist...
          </h2>
          <div className="text-white mt-10 grid grid-cols-3 md:grid-cols-4  gap-4 mx-4">
            {watchlist.map((item, id) => {
              return <MovieCard key={id} item={item} />;
            })}
          </div>
        </div>
      ) : (
        <div className="pt-[100px] h-screen w-full flex  flex-col justify-center items-center text-white">
          <div className="flex">
            <h1 className=" text-2xl md:text-4xl lg:text-6xl">
              Your Watchlist is empty.
            </h1>
            <CgSmileSad className=" text-yellow-400 animate-bounce" size={80} />
          </div>

          <Link to="/">
            <button className="bg-yellow-500 px-3 py-1 rounded-xl hover:scale-105 transition-all">
              Add Now
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Watchlist;
