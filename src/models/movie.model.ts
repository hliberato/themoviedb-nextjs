export default interface Movie {
  id: number;
  adult?: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  genres: { id: number; name: string }[];
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path: string;
  release_date: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
  tagline: string;
  belongs_to_collection?: {
    id: number;

    name: string;
    poster_path: string;
    backdrop_path?: string;
  };
  runtime?: number;
  production_companies?: {
    id: number;
    logo_path?: string;
    name: string;
    origin_country: string;
  }[];
  production_countries?: {
    iso_3166_1: string;
    name: string;
  }[];
  spoken_languages?: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  budget?: number;
  homepage?: string;
  imdb_id?: string;
  origin_country?: string[];
  revenue?: number;
  status?: string;
}
