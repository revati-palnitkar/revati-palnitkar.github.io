import React from "react";
import "../styles/FilmPoster.css";

const FilmPoster = ({ posterPath, title }) => (
  <div className="poster-wrapper">
    <img
      src={`https://image.tmdb.org/t/p/w500${posterPath}`}
      alt={title}
      className="movie-poster"
    />
  </div>
);

export default FilmPoster;