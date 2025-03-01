import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    
    return (
        <MovieContext.Provider value={{ movies, setMovies, loading, setLoading, error, setError, searchTerm, setSearchTerm }}>
            {children}
        </MovieContext.Provider>
    );
};
