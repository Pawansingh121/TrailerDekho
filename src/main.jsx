import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Context from "./context/Context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>
);
