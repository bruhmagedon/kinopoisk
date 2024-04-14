export interface MovieIdApiResponse {
  id: number; //Id фильма с кинопоиска
  externalId: ExternalId;
  name?: string;
  alternativeName?: string;
  enName?: string;
  names: Names[];
  type: Type; //Тип тайтла
  typeNumber: number; // №Возможно как record 1 (movie) | 2 (tv-series) | 3 (cartoon) | 4 (anime) | 5 (animated-series) | 6 (tv-show)
  year?: number; //Год премьеры №(1860-2030) протипизировать диапазон
  description?: string; //Описание тайтла
  shortDescription?: string; //Сокращенное описание
  slogan?: string; //Слоган
  status?: Status; //Статус релиза тайтла
  rating?: Rating;
  votes?: Votes;
  movieLength?: number; //Продолжительность фильма
  ratingMpaa?: string; //Возрастной рейтинг по MPAA
  ageRating?: number; //Возрастной рейтинг
  logo?: Logo;
  poster?: Poster;
  backdrop?: Poster;
  videos?: Videos;
  genres?: Genre[];
  countries?: Country[];
  persons?: Person[];
  reviewInfo?: ReviewInfo;
  seasonsInfo?: SeasonInfo[];
  budget?: Budget;
  fees?: Fees;
  premiere?: Premiere;
  similarMovies?: SimilarMovie[];
  sequelsAndPrequels?: SequelOrPrequel[];
  watchability?: WatchabilityItem[];
  releaseYears?: ReleaseYears[];
  top10?: number; //Позиция тайтла в топ 10
  top250?: number; //Позиция тайтла в топ 250
  ticketsOnSale?: boolean; //Признак того, что тайтл находится в прокате
  totalSeriesLength?: number; //Продолжительность всех серий
  seriesLength?: number; //Средняя продолжительность серии
  isSeries?: boolean; //Признак сериала
  audience?: Audience[];
  lists?: string[];
  networks: { items: Network[] };
  updatedAt: string;
  createdAt: string;
  facts: Fact[];
  imagesInfo: ImagesInfo;
}

interface ExternalId {
  kpHD?: string; //ID из kinopoisk HD
  imdb?: string;
  tmdb?: number;
}

interface Names {
  name?: string;
  language?: string;
  type?: string;
}

type Type =
  | "movie"
  | "tv-series"
  | "cartoon"
  | "anime"
  | "animated-series"
  | "tv-show";

type Status =
  | "filming"
  | "pre-production"
  | "completed"
  | "announced"
  | "post-production";

interface Rating {
  kp?: number; //Рейтинг кинопоиска
  imdb?: number; //Рейтинг IMDB
  tmdb?: number; //Рейтинг TMDB
  filmCritics?: number; //Рейтинг кинокритиков
  russianFilmCritics?: number; //Рейтинг кинокритиков из РФ
  await?: number; //Рейтинг основанный на ожиданиях пользователей
}

interface Votes {
  kp?: string;
  imdb?: number;
  tmdb?: number;
  filmCritics?: number; //Количество голосов кинокритиков
  russianFilmCritics?: number; //Количество голосов кинокритиков из РФ
  await?: number; //Количество ожидающих выхода
}

interface Logo {
  url?: string;
}

interface Poster {
  url?: string;
  previewUrl?: string;
}

interface Videos {
  trailers?: Video[];
  teasers?: Video[];
}

interface Video {
  url?: string; //Url трейлера
  name?: string;
  site?: string;
  type?: string;
  size: number;
}

interface Genre {
  name?: string;
}

interface Country {
  name?: string;
}

export interface Person {
  id?: number; //Id персоны с кинопоиска
  photo?: string;
  name?: string;
  enName?: string;
  description: string;
  profession: string;
  enProfession: string;
}

interface ReviewInfo {
  count?: number;
  positiveCount?: number;
  percentage?: string;
}

interface SeasonInfo {
  number?: number;
  episodesCount?: number;
}

interface Budget {
  value?: number; //Сумма
  currency?: string; //Валюта
}

interface Fees {
  world?: Budget;
  russia?: Budget;
  usa?: Budget;
}

interface Premiere {
  country?: string;
  world?: string; //№ 01.02.2022-01.02.2023 типизировать
  russia?: string; //№ 01.02.2022-01.02.2023 типизировать
  digital?: string;
  cinema?: string; //№ 01.02.2022-01.02.2023 типизировать
  bluray: string;
  dvd: string;
}

export interface SimilarMovie {
  id?: number;
  rating: Rating;
  year: number;
  name: string;
  enName: string;
  alternativeName: string;
  type?: string;
  poster: Poster;
}

interface SequelOrPrequel {
  id?: number;
  rating: Rating;
  year: number;
  name: string;
  enName: string;
  alternativeName: string;
  type?: string;
  poster: Poster;
}

interface WatchabilityItem {
  name?: string;
  logo: Logo;
  url: string;
}

interface ReleaseYears {
  start?: number;
  end?: number;
}

interface Audience {
  count: number; //Количество просмотров в кино
  country: string; //Страна в которой проходил показ
}

interface Network {
  name: string;
  logo: Logo;
}

interface Fact {
  value: string;
  type: string;
  spoiler: boolean;
}

interface ImagesInfo {
  postersCount: number;
  backdropsCount: number;
  framesCount: number;
}
