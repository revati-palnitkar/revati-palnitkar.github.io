import React from "react";
import "./Tabs.css";

const categories = ["popular", "now_playing", "top_rated"];

const CategoryTabs = ({ category, setCategory }) => (
  <div className="tab-container">
    {categories.map((cat) => (
      <button
        key={cat}
        className={`tab ${category === cat ? "active" : ""}`}
        onClick={() => setCategory(cat)}
      >
        {cat.replace("_", " ").toUpperCase()}
      </button>
    ))}
  </div>
);

export default CategoryTabs;
