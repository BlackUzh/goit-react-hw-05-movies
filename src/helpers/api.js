import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmU5NzBhNDk0NzRlODhjOGRkMGE0NWZlMTRiNDNkNCIsInN1YiI6IjY0YTJiZmY3ODI4OWEwMDBhZTg4OTcyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RvEqmRylIgh2LAFsKUIxIJGb6d9l6sg-wNjsCyA7mFs',
  },
};

async function fetchTrendingMovies() {
  const response = await axios.get('/trending/all/day?language=en-US', options);
  return response.data.results;
}

async function fetchMovieSearch(query) {
  const response = await axios.get(
    `/search/movie?query=${query}&language=en-US`,
    options
  );
  return response.data.results;
}
async function fetchMovieDetails(id) {
  const response = await axios.get(`/movie/${id}?language=en-US`, options);
  return response.data;
}

async function fetchAddition(id, param) {
  const response = await axios.get(
    `movie/${id}/${param}?language=en-US`,
    options
  );
  return response.data;
}

export {
  fetchTrendingMovies,
  fetchMovieSearch,
  fetchMovieDetails,
  fetchAddition,
};
