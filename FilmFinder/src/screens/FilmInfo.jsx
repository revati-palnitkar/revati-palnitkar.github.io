import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../utils/api";
import "../styles/FilmInfo.css";

const FilmInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError("Failed to load movie details");
      }
    };

    loadDetails();
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (!movie) return <p className="loading">Loading...</p>;

  return (
    <div className="movie-details-card compact">
      <h2 className="movie-title gradient-text">{movie.title}</h2>
      <div className="movie-content">
        <div className="poster-wrapper">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
        </div>
        <div className="movie-info">
          <p className="overview">{movie.overview}</p>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.runtime} minutes
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((g) => g.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilmInfo;
