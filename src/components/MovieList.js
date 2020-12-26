import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ Movies, onMovieSelect }) => {
  console.log(Movies);
  const renderedList = Movies.map((Movie) => {
    return (
      <MovieItem
        Movie={Movie}
        onMovieSelect={onMovieSelect}
        key={Movie.id.MovieId}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default MovieList;
