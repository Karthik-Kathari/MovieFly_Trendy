// src/utils/api.js

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMovies(category) {
  try {
    const url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}`; // 
    console.log('🔍 Fetching movies from:', url);

    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ TMDB API error response:', errorText);
      throw new Error('Failed to fetch movies');
    }

    const json = await response.json();
    return json.results || [];
  } catch (error) {
    console.error('❌ Error fetching movies:', error.message);
    return [];
  }
}
