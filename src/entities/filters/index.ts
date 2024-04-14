import { useFetchFiltersQuery, filterApi } from "./api/filtersApi";
import {
  FilterApiResponse,
  FilterApiParams,
  FILTER_TYPES,
} from "./model/types";
import FiltersSlice, {
  setFilter,
  SelectedFilters,
  resetFilters,
} from "./model/FiltersSlice";

import { setSort, resetSort } from "./model/SortSlice";

export {
  setSort,
  resetSort,
  resetFilters,
  SelectedFilters,
  filterApi,
  useFetchFiltersQuery,
  FiltersSlice,
  setFilter,
  FilterApiResponse,
  FilterApiParams,
  FILTER_TYPES,
};
