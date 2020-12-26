import React from 'react';
import styles from '../styles/MovieItem.module.scss';

const MovieItem = ({ Movie, onMovieSelect }) => {
  const imgSrc = `https://image.tmdb.org/t/p/h100${Movie.poster_path}`;
  return (
    <div
      onClick={() => onMovieSelect(Movie)}
      className={`item ${styles.MovieItem}`}
    >
      <img className="ui image" src={imgSrc} />
      <div className="content">
        <div className="header">{Movie.original_title}</div>
      </div>
    </div>
  );
};

export default MovieItem;
