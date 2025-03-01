import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieListing from './pages/MovieListing';
import MovieDetails from './pages/MovieDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MovieListing />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
