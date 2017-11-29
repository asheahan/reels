import React from 'react';

function GenreList(props) {
  if (props.genres && props.genres.length > 0) {
    return (
      <div className='genre-list'>
        {
          props.genres.map((genre, idx) => {
            return `${genre.name}${idx === props.genres.length - 1 ? '' : ', '}`;
          })
        }
      </div>
    );
  } else {
    return null;
  }
}

export default GenreList;
