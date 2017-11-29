import React from 'react';
import MovieItem from './MovieItem';
import './MovieList.css';

function MovieList(props) {
  return (
    <div className="movie-list">
      {
        props.movies.map(movie => {
          return <MovieItem key={movie.id} movie={movie} />
        })
      }
    </div>
  );
}

export default MovieList;
