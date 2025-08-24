import React from 'react';
import '../styles/MovieCard.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie }) => {
  const handleClick = () => {
    window.open(`https://www.themoviedb.org/movie/${movie.id}`, '_blank');
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img
        src={movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : '/placeholder.png'}
        alt={movie.title}
      />
      <div className="overlay">
        <h3>{movie.title}</h3>
        <p>Release: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
