// src/components/MovieCard/MovieCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../../store/FavouriteContext";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleFavClick = (e) => {
    e.preventDefault();
    toggleFavorite(movie);
  };

  const renderStarIcon = () => {
    return isFavorite(movie.id) ? (
      <svg width="20" height="20" fill="#f5b301" viewBox="0 0 24 24" >
        <path d="M12 17.27L18.18 21 16.55 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24 7.45 13.97 5.82 21z" />
      </svg>
    ) : (
      <svg width="20" height="20" fill="none" stroke="#f5b301" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21 16.55 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24 7.45 13.97 5.82 21z" />
      </svg>
    );
  };

  return (
    <Link to={`/movie/${movie.id}`} className="card">
      <div className="poster-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <button
          className={`fav-btn ${isFavorite(movie.id) ? "fav" : "not-fav"}`}
          onClick={handleFavClick}
          title="Toggle Favorite"
        >
          {renderStarIcon()}
        </button>
      </div>
      <h3>{movie.title}</h3>
    </Link>
  );
};

export default MovieCard;
