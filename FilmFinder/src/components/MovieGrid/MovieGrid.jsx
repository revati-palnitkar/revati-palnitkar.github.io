import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import './Movies.css'

const MovieGrid = ({ movies }) => (
  <div className="movie-grid">
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);

export default MovieGrid;