import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css"

const MovieCard = ({ movie }) => (
  <Link to={`/movie/${movie.id}`} className="card">
    <img
      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
      alt={movie.title}
    />
    <h3>{movie.title}</h3>
  </Link>
);

export default MovieCard;