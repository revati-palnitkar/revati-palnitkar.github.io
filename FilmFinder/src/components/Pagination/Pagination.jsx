// src/components/Pagination/Pagination.jsx
import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({ page, setPage, totalPages }) => {
  const [pageInput, setPageInput] = useState("");

  const handlePageClick = (num) => {
    if (num !== page) setPage(num);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePageInputChange = (e) => {
    setPageInput(e.target.value);
  };

  const handlePageInputSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(pageInput);
    if (!isNaN(num) && num >= 1 && num <= totalPages) {
      setPage(num);
      setPageInput("");
    }
  };

  const getPageNumbers = () => {
    const range = [];
    const delta = 2;
    const left = Math.max(2, page - delta);
    const right = Math.min(totalPages - 1, page + delta);

    range.push(1);
    if (left > 2) range.push("...");

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < totalPages - 1) range.push("...");
    if (totalPages > 1) range.push(totalPages);

    return range;
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={page === 1}>
        ←
      </button>
      {getPageNumbers().map((num, idx) => (
        <button
          key={idx}
          disabled={num === "..."}
          className={num === page ? "active-page" : ""}
          onClick={() => typeof num === "number" && handlePageClick(num)}
        >
          {num}
        </button>
      ))}
      <button onClick={handleNextPage} disabled={page === totalPages}>
        →
      </button>
      <form onSubmit={handlePageInputSubmit} className="page-input-form">
        <input
          type="number"
          min="1"
          max={totalPages}
          value={pageInput}
          onChange={handlePageInputChange}
          placeholder="Go to page"
          className="page-input"
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default Pagination;