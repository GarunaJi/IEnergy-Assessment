import React, { useState, useContext, useEffect } from 'react';
import { MovieContext } from '../context/MovieContext';
import SuggestionsList from './SuggestionsList';
import { debounce } from 'lodash';

const SearchBar = () => {
    const { setSearchTerm, setMovies } = useContext(MovieContext);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const fetchSuggestions = debounce(async (q) => {
        if (!q) {
            setSuggestions([]);
            return;
        }
        const response = await fetch(`https://www.omdbapi.com/?apikey=b9bd48a6&s=${q}`);
        const data = await response.json();
        setSuggestions(data.Search || []);
    }, 500);

    useEffect(() => {
        fetchSuggestions(query);
    }, [query]);

    const handleSearch = (movie) => {
        setSearchTerm(movie.Title);
        setMovies([]);
        setQuery(movie.Title);
        setSuggestions([]);
    };

    return (
        <div className="search-bar">
            <input
            className="search-input"
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <SuggestionsList suggestions={suggestions} onSelect={handleSearch} />
        </div>
    );
};

export default SearchBar;
