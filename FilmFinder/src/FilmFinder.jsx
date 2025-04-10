import React, { useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import FilmInfo from "./screens/FilmInfo";
import { Moon, Sun } from "lucide-react";
import BackButton from "./components/FilmPoster/BackButton";
import { ThemeContext } from "./store/ThemeContext";
import "./styles/FilmInfo.css";

const FilmFinder = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle("dark", darkTheme);
  }, [darkTheme]);

  const isDetailPage = location.pathname.startsWith("/movie/");

  return (
    <div className="container">
      <header className="header">
        <h1 className="title gradient-title">FilmFinder</h1>
        <div className="header-controls">
          {isDetailPage && <BackButton />}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {darkTheme ? <Sun /> : <Moon />}
          </button>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/movie/:id" element={<FilmInfo />} />
      </Routes>
    </div>
  );
};

export default FilmFinder;
