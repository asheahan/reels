import React from 'react';
import { Link } from 'react-router-dom';
import Poster from '../Poster';
import './MovieItem.css';

function MovieItem(props) {
  return (
    <div className="movie-item">
      <Poster poster={props.movie.poster_path} />
      {props.movie.id}
      <div className="movie-description">
        <Link to={`/movies/${props.movie.id}`}><h2>{props.movie.title}</h2></Link>
        <span className="sub-heading">{props.movie.release_date}</span>
        <p>{props.movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieItem;
