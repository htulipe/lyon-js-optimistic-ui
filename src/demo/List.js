import React from 'react';
import PropTypes from 'prop-types';

const MoviesList = ({ error, loading, movies }) => {
  if (error) {
    return <div className="movies-list-state">An error occurred</div>;
  }
  if (loading) {
    return <div className="movies-list-state">Loading...</div>;
  }
  if (!movies || !movies.length) {
    return <div className="movies-list-state">No data!</div>;
  }
  return (
    <ul className="movies-list">
      {movies.map(movie => (
        <li key={movie}>{movie}</li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(PropTypes.string)
};

MoviesList.defaultProps = {
  movies: []
};

export default MoviesList;
