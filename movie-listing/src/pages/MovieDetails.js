import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import './MovieListing.css';

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const loadMovie = async () => {
            const data = await fetchMovieDetails(id);
            setMovie(data);
        };
        loadMovie();
    }, [id]);

    if (!movie) return <p className="loading">Loading...</p>;

    return (
        <div className="movie-details-container">
            <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

            <div className="movie-details-card">
                <div className="movie-poster">
                    <img src={movie.Poster} alt={movie.Title} />
                </div>

                <div className="movie-info">
                    <h1 className="movie-title">{movie.Title}</h1>

                    <div className="movie-meta">
                        <span className="movie-year">{movie.Year}</span>
                        <span className="movie-rating">{movie.Rated}</span>
                        <span className="movie-runtime">{movie.Runtime}</span>
                    </div>

                    <p className="movie-plot">{movie.Plot}</p>

                    <div className="movie-details">
                        <p><strong>Director:</strong> {movie.Director}</p>
                        <p><strong>Writer:</strong> {movie.Writer}</p>
                        <p><strong>Stars:</strong> {movie.Actors}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
