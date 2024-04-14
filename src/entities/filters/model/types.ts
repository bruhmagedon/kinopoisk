export interface FilterApiParams {
  field: string;
}

export type FilterApiResponse = FilterType[];
export interface FilterType {
  name?: string;
  slug?: string;
}

export enum FILTER_TYPES {
  genres = "genres.name",
  countries = "countries.name",
  status = "status",
  type = "type",
}
