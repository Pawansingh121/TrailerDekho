import React from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Rows from "./components/Rows";
import SearchBar from "./components/SearchBar";
import Watchlist from "./components/Watchlist";
import "./App.css";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="bg-[#111] ">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <SearchBar />
              <Rows />
            </>
          }
        />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
