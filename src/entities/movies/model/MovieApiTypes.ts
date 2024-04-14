import { SelectedFilters } from "@/entities/filters/model/FiltersSlice";
import { MovieIdApiResponse } from "./MovieTypes";

export interface MoviesApiResponse {
  docs: MovieIdApiResponse[];
}

export type MovieId = {
  movieId?: string;
  id?: string;
};

interface IQueryParams extends SelectedFilters {
  limit: number;
  page: number;
  query: string;
  sortField: string;
  sortType: string;
}

export type MovieParamsType = Partial<IQueryParams>;

export interface PostersApiResponse {
  docs: Poster[];
}
interface Poster {
  createdAt?: string;
  height?: number;
  id?: string;
  movieId?: number;
  previewUrl?: string;
  type?: string;
  updatedAt?: string;
  url?: string;
  width?: number;
}

export interface SeriesApiResponse {
  docs: Doc[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

interface Doc {
  movieId?: number;
  name?: string;
  number?: number;
  episodesCount?: number;
  airDate: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  duration: number;
  enDescription: string;
  enName: string;
  poster: { url?: string; previewUrl?: string };
  episodes: Episode[];
}

interface Still {
  url?: string | null;
  previewUrl?: string | null;
}

export interface Episode {
  number?: number;
  name?: string;
  enName?: string;
  still?: Still;
  duration?: number;
  description?: string;
  airDate?: string;
  enDescription?: string;
}

export interface ReviewParamsType extends Partial<IQueryParams> {
  movieId: string;
}

export interface ReviewApiResponse {
  docs: ReviewData[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface ReviewData {
  id?: number;
  movieId?: number;
  title?: string;
  type?: string;
  review?: string;
  date?: string;
  author?: string;
  userRating: number;
  authorId?: number;
  createdAt: string;
  updatedAt: string;
}
