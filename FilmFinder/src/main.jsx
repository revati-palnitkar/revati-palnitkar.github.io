import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import FilmFinder from "./FilmFinder";
import { ThemeProvider } from "./store/ThemeContext";
import { FavoritesProvider } from "./store/FavouriteContext"; 
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritesProvider>
      <ThemeProvider>
        <BrowserRouter>
          <FilmFinder />
        </BrowserRouter>
      </ThemeProvider>
    </FavoritesProvider>
  </React.StrictMode>
);
