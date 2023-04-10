import React from "react";
import YouTube from "react-youtube";

const Player = ({ trailer, setTrailer }) => {
  const opts = {
    width: "340",
    height: "340",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };
  return (
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
  );
};

export default Player;
