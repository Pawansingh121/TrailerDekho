import React from "react";
import requests from "../Request";
import SingleRow from "./SingleRow";
const Rows = () => {
  return (
    <div>
      <SingleRow title="Upcoming" fetchURL={requests.requestUpcoming} />
      <SingleRow title="Popular" fetchURL={requests.requestPopular} />
      <SingleRow title="Trending" fetchURL={requests.requestTrending} />
      <SingleRow title="Horror" fetchURL={requests.requestHorror} />
      <SingleRow title="Top Rated" fetchURL={requests.requestTopRated} />
    </div>
  );
};

export default Rows;
