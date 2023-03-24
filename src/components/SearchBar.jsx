import React from "react";
import { searchState } from "../context/Context";
import { FcSearch } from "react-icons/fc";

const SearchBar = () => {
  const {
    state: { input },
    dispatch,
  } = searchState();
  return (
    <>
      <div className="flex justify-center items-center flex-shrink relative px-4 md:px-0">
        <div className="bg-white flex items-center justify-between rounded-2xl  w-[700px] h-[30px] absolute bottom-[50px]  text-black ">
          <input
            className="ml-2 w-[550px] outline-none"
            type="text"
            placeholder="Search Movie"
            value={input}
            onChange={(e) => {
              dispatch({
                type: "searchInput",
                payload: e.target.value,
              });
            }}
          />
          <FcSearch className="mr-6" size={24} />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
