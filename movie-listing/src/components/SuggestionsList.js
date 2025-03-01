import React from 'react';

const SuggestionsList = ({ suggestions, onSelect }) => (
    <ul className="suggestions-list">
        {suggestions.map(suggestion => (
            <div className='movie-found' key={suggestion.imdbID} onClick={() => onSelect(suggestion)}>
                {suggestion.Title}
            </div>
        ))}
    </ul>
);

export default SuggestionsList;
