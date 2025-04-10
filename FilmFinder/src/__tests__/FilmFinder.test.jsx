import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "../store/ThemeContext";
import FilmFinder from "../FilmFinder";

const renderWithProviders = (route = "/") => {
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={[route]}>
        <FilmFinder />
      </MemoryRouter>
    </ThemeProvider>
  );
};

test("renders FilmFinder heading", () => {
  renderWithProviders();
  expect(screen.getByText(/FilmFinder/i)).toBeInTheDocument();
});

test("shows back button on detail page", () => {
  renderWithProviders("/movie/123");
  expect(screen.getByRole("button", { name: /go back/i })).toBeInTheDocument();
});