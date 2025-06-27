import http from '@/http';

const MovieService = {
  getMovieDetails: (id: string) => {
    return http.get(`movie/${id}?language=en-US`);
  },

  getPopularMovies: (page: number = 1) => {
    return http.get(`movie/popular?language=en-US&page=${page}`);
  },

  geMoviesByquery: (query: string = 'a', page: number = 1) => {
    return http.get(
      `search/movie?language=en-US&page=${page}&sort_by=popularity.desc&query=${query}`
    );
  },
};

export default MovieService;
