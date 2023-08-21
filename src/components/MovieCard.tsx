import React from 'react';

interface MovieCardProps {
  title: string;
  coverImage: string;
  releasedYear: string;
}

const MovieCard = () => {
  return (
    <div className="movie-card">
      <img src='https://d2gewc5xha837s.cloudfront.net/ml-1m-cover-images/1/000001.jpg' alt="Movie Title" className="movie-card__image" />
      <div className="movie-card__info">
        <h2 className="movie-card__title">Movie Title</h2>
        <p className="movie-card__released-year">Released Year: 2000</p>
      </div>
    </div>
  );
};

export default MovieCard;