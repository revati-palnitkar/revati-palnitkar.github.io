import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import FilmFinder from "./FilmFinder";
import { ThemeProvider } from "./store/ThemeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <FilmFinder />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
