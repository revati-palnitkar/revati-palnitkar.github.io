import React from "react";
import FilmPoster from "./FilmPoster";
import "../styles/FilmDetails.css";

const FilmDetails = ({ movie }) => (
  <>
    <h2 className="movie-title gradient-text">{movie.title}</h2>
    <div className="movie-content">
      <FilmPoster posterPath={movie.poster_path} title={movie.title} />
      <div className="movie-info">
        <p className="overview">{movie.overview}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
        <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
        <p><strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}</p>
      </div>
    </div>
  </>
);

export default FilmDetails;