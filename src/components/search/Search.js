import React, { Component } from 'react';
import { searchMovies } from '../../api';
import './Search.css';
import MovieList from '../movie-list/MovieList';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      searchResults: []
    };
  }

  handleSearchInput = (event) => {
    this.setState({ search: event.target.value });
  }

  searchMovies = (event) => {
    if (this.state.search) {
      console.log(`Fetching movie results for search: ${this.state.search}`);
      searchMovies(this.state.search)
        .then(results => {
          this.setState({ searchResults: results });
        });
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="search">
        <div className="search-input-container">
          <input type="text" className="search-input" placeholder="Casablanca e.g." value={this.state.search} onChange={this.handleSearchInput} />
          <button type="button" className="search-button" onClick={this.searchMovies}>Search</button>
        </div>
        <div className="search-results-container">
          <MovieList movies={this.state.searchResults} />
        </div>
      </div>
    );
  }
}

export default Search;
