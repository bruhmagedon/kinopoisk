import {
  useFetchMoviesQuery,
  movieApi,
  useFetchMovieByIdQuery,
  useFetchPostersQuery,
  useFetchSeasonsAndSeriesQuery,
  useFetchReviewQuery,
  useFetchSearchQuery,
} from "./api/moviesApi";
import type {
  MoviesApiResponse,
  PostersApiResponse,
  SeriesApiResponse,
  MovieId,
} from "./model/MovieApiTypes";
import type { MovieIdApiResponse, Person } from "./model/MovieTypes";

export {
  PostersApiResponse,
  MovieIdApiResponse,
  MoviesApiResponse,
  useFetchMoviesQuery,
  movieApi,
  useFetchMovieByIdQuery,
  useFetchPostersQuery,
  Person,
  SeriesApiResponse,
  useFetchSeasonsAndSeriesQuery,
  MovieId,
  useFetchReviewQuery,
  useFetchSearchQuery,
};
