export interface Requests {
  requestPopular: string;
  requestTopRated: string;
  requestTrending: string;
  requestHorror: string;
  requestUpcoming: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface UserState {
  token: string;
  favouriteMovies: Movie[];
  signInError: string | undefined;
  signUpError: string | undefined | string[];
}
