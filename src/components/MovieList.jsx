import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/api';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';
import _ from 'lodash';

const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(null);
  const [sortBy, setSortBy] = useState('release_date');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(category);
      setMovies(Array.isArray(data) ? data : []); // Defensive: ensure array
    };
    loadMovies();
  }, [category]);

  useEffect(() => {
    let result = [...movies];

    if (ratingFilter) {
      result = result.filter(movie => movie.vote_average >= ratingFilter);
    }

    result = _.orderBy(result, [sortBy], [sortOrder]);

    setFilteredMovies(result);
  }, [movies, ratingFilter, sortBy, sortOrder]);

  const toggleRatingFilter = (rating) => {
    setRatingFilter(current => (current === rating ? null : rating));
  };

  if (!movies.length) {
    return <p>Loading movies...</p>;
  }

  return (
    <>
      <div className="filter-sort-controls">
        <div className="filter">
          <span>Filter by Rating: </span>
          <button
            className={ratingFilter === 8 ? 'active' : ''}
            onClick={() => toggleRatingFilter(8)}
          >
            8+
          </button>
          <button
            className={ratingFilter === 7 ? 'active' : ''}
            onClick={() => toggleRatingFilter(7)}
          >
            7+
          </button>
        </div>
        <div className="sort">
          <label>
            Sort by:{' '}
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="release_date">Release Date</option>
              <option value="vote_average">Rating</option>
            </select>
          </label>
          <label>
            Order:{' '}
            <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </div>
      </div>

      <div className="movie-list">
        {filteredMovies.map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
