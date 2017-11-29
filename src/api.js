import axios from 'axios';

const API_KEY = '51ea36faedf50d50f40c026083b41a03';

const http = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export const searchMovies = search => {
  return http.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query: search
    }
  })
  .then(res => {
    return res.data.results;
  });
};

export const getMovie = movieId => {
  return http.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY
    }
  })
  .then(res => {
    return res.data;
  });
};
