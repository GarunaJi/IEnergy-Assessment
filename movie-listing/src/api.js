const API_KEY = 'b9bd48a6';
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (searchTerm, page = 1) => {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}&page=${page}`);
    return await response.json();
};

export const fetchMovieDetails = async (id) => {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
    return await response.json();
};
