import React from 'react';
import styles from '../styles/MovieDetail.module.scss';

const MovieDetail = ({ Movie }) => {
  if (!Movie) {
    return <div>Loading...</div>;
  }

  const imgSrc = `https://image.tmdb.org/t/p/w300${Movie.poster_path}`;

  return (
    <div className={styles.MovieDetail}>
      <img src={imgSrc} />
      <div className="ui segment">
        <h4 className={styles.heading}>{Movie.title}</h4>
        <p>bla bla</p>
      </div>
    </div>
  );
};

export default MovieDetail;
