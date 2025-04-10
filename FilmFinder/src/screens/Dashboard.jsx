import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovies } from "../utils/api";
import SearchBar from "../components/SearchBar/SearchBar";
import CategoryTabs from "../components/CategoryTabs/CategoryTabs";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import Pagination from "../components/Pagination/Pagination";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const location = useLocation();
  const initialCategory = location.state?.category || "popular";
  const initialSearch = location.state?.searchTerm || "";
  const initialPage = location.state?.page || 1;

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page, category, searchTerm]);

  useEffect(() => {
    setPage(1);
  }, [category, searchTerm]);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchMovies(category, searchTerm, page);
        if (!data || !data.results) {
          throw new Error("No data returned from API");
        }
        setMovies(data.results);
        setTotalPages(data.total_pages || 1);
      } catch (err) {
        console.error("Error loading movies:", err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [category, searchTerm, page]);

  return (
    <div className="container">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryTabs category={category} setCategory={setCategory} />

      {loading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && movies.length === 0 && <p>No movies found.</p>}

      <MovieGrid movies={movies} category={category} searchTerm={searchTerm} page={page} />

      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Dashboard;