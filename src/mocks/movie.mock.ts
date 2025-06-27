import Movie from '@/models/movie.model';

const movieMock: Movie = {
  adult: false,
  backdrop_path: '/nAxGnGHOsfzufThz20zgmRwKur3.jpg',
  belongs_to_collection: {
    id: 1489663,
    name: 'Sinners Collection',
    poster_path: '/48KYBYnHmt7ykX57zGuv6SXVZOO.jpg',
    backdrop_path: '/e0kl32U3pHA2cdR1VGRk5TUmrFr.jpg',
  },
  budget: 90000000,
  genres: [
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 53,
      name: 'Thriller',
    },
  ],
  homepage: 'https://www.sinnersmovie.com',
  id: 1233413,
  imdb_id: 'tt31193180',
  origin_country: ['US'],
  original_language: 'en',
  original_title: 'Sinners',
  overview:
    'Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.',
  popularity: 139.9464,
  poster_path: '/yqsCU5XOP2mkbFamzAqbqntmfav.jpg',
  production_companies: [
    {
      id: 174,
      logo_path: '/zhD3hhtKB5qyv7ZeL4uLpNxgMVU.png',
      name: 'Warner Bros. Pictures',
      origin_country: 'US',
    },
    {
      id: 148495,
      logo_path: '/2fQRDickgp9vuDIxJTlDLEs7j0y.png',
      name: 'Proximity Media',
      origin_country: 'US',
    },
    {
      id: 216687,
      logo_path: '/kKVYqekveOvLK1IgqdJojLjQvtu.png',
      name: 'Domain Entertainment',
      origin_country: 'US',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  release_date: '2025-04-16',
  revenue: 362889145,
  runtime: 138,
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
    {
      english_name: 'Portuguese',
      iso_639_1: 'pt',
      name: 'Português',
    },
  ],
  status: 'Released',
  tagline: 'Dance with the devil.',
  title: 'Sinners',
  video: false,
  vote_average: 7.555,
  vote_count: 1654,
};

export default movieMock;
