import React from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div>
      <Navbar />
      <section id="popular">
        <h2>🎬 Popular Movies</h2>
        <MovieList category="popular" />
      </section>
      <section id="top_rated">
        <h2>⭐ Top Rated Movies</h2>
        <MovieList category="top_rated" />
      </section>
      <section id="upcoming">
        <h2>📅 Upcoming Movies</h2>
        <MovieList category="upcoming" />
      </section>
    </div>
  );
}

export default App;
