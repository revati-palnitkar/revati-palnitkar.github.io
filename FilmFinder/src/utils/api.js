// src/utils/api.js

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovies = async (category, query, page = 1) => {
  const url = query
    ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
    : `${BASE_URL}/movie/${category}?api_key=${API_KEY}&page=${page}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
};

export const fetchMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
};
