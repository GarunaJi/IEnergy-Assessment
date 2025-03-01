import React, { useEffect, useContext, useState, useCallback } from 'react';
import { fetchMovies } from '../api';
import { MovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import './MovieListing.css';

const MovieListing = () => {
    const { movies, setMovies, loading, setLoading, error, setError, searchTerm } = useContext(MovieContext);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const loadMovies = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            const data = await fetchMovies(searchTerm, page);

            console.log(data);
               

            if (data.Search) {
                setMovies(prev => [...prev, ...data.Search]);
                setHasMore(data.Search.length > 0);
            } else {
                setError('No results found.');
                setHasMore(false);
            }
        } catch (err) {
            setError('Failed to fetch movies');
        } finally {
            setLoading(false);
        }
    }, [searchTerm, page, setError, setLoading, setMovies]);

    useEffect(() => {
        if (searchTerm) {
            // Reset movies and page when search term changes
            if (page === 1) {
                setMovies([]);
                loadMovies();
            } else {
                setPage(1);
            }
        }
    }, [searchTerm, loadMovies, page, setMovies]);

    useEffect(() => {
        if (searchTerm && page > 1) {
            loadMovies();
        }
    }, [page, loadMovies, searchTerm]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight && hasMore && !loading) {
            setPage(prev => prev + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasMore, loading]);

    return (
        <div className="listing-container">
            <div className="search-container">
                <h1>MovieFlix</h1>
                <p className="subtitle">Discover your next favorite film</p>
                <SearchBar/>
            </div>
            
            {movies.length > 0 ? (
                <>
                    <div className="results-info">
                        <h2>Search Results{searchTerm ? ` for "${searchTerm}"` : ""}</h2>
                        <p>{movies.length} movies found</p>
                    </div>
                    
                    <div className="movies-grid">
                        {movies.map(movie => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                </>
            ) : !loading && searchTerm ? (
                <div className="empty-state">
                    <div className="empty-state-content">
                        <i className="empty-icon">🎬</i>
                        <h3>No movies found</h3>
                        <p>Try adjusting your search or browse our recommendations</p>
                    </div>
                </div>
            ) : !searchTerm ? (
                <div className="welcome-state">
                    <div className="welcome-content">
                        <i className="welcome-icon">🍿</i>
                        <h2>Welcome to MovieFlix</h2>
                        <p>Start by searching for your favorite movies</p>
                    </div>
                </div>
            ) : null}
            
            {loading && (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading amazing movies...</p>
                </div>
            )}
            
            {error && <div className="error-message">{error}</div>}
            
            {!hasMore && movies.length > 0 && (
                <div className="end-message">
                    <p>You've reached the end of the results</p>
                </div>
            )}
        </div>
    );
};

export default MovieListing;