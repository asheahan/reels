import React from 'react';

function Poster(props) {
  if (props.poster) {
    return (
      <div className="movie-poster">
        <img src={`http://image.tmdb.org/t/p/w154${props.poster}`} alt="" />
      </div>
    );
  } else {
    return null;
  }
}

export default Poster;
