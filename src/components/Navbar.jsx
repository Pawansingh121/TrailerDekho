import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { searchState } from "../context/Context";
const Navbar = () => {
  const {
    state: { input },
    dispatch,
  } = searchState();

  const [show, setShow] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 30) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={` h-[90px] w-screen flex-1  flex items-center justify-between pl-1 md:pl-6 lg:pl-8 pr-2 md:pr-8 lg:pr-10  transition ease-in duration-300 fixed text-white z-50  ${
        show && "bg-[#111] fixed z-40 "
      } `}
    >
      <Link to="/">
        <div className="flex items-center  gap-1 md:gap-2 cursor-pointer">
          <img
            className=" w-[40px] h-[40px] md:w-[70px] md:h-[70px]  "
            src={logo}
            alt=""
          />
          <p className="text-medium  md:text-xl font-semibold">TrailerDekho</p>
        </div>
      </Link>
      <Link to="watchlist">
        <button className="text-[14px] md:text-[16px] lg:text-[18px] border px-2 md:px-4 bg-yellow-500 rounded ">
          Watchlist
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
