import React, { Component } from 'react';
import { getMovie } from '../../api';
import Poster from '../Poster';
import GenreList from './GenreList';

class MovieDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieId: props.match.params.id,
      movie: {}
    };
  }

  render() {
    return (
      <div className="movie-details-container">
        <Poster poster={this.state.movie.poster_path} />
        <div className="movie-details">
          <h2>{this.state.movie.title}</h2>
          <span className="subheading">{this.state.movie.tagline}</span>
          <br />
          <span className="subheading">{this.state.movie.release_date}</span>
          <GenreList genres={this.state.movie.genres} />
          <p>{this.state.movie.overview}</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    getMovie(this.state.movieId)
      .then(details => {
        console.log(details);
        this.setState({ movie: details });
      });
  }
}

export default MovieDetail;
