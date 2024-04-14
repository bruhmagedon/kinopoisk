import { useFetchFiltersQuery } from "@/entities/filters";
import { FilterType } from "@/entities/filters/model/types";

import _ from "lodash";

export type useFiltersReturnType = ReturnType<typeof useFilters>;

export const useFilters = () => {
  const basicFilter: FilterType = {
    name: "Нет",
    slug: "",
  };

  const { data: genresData } = useFetchFiltersQuery({
    field: "genres.name",
  });
  const { data: countriesData } = useFetchFiltersQuery({
    field: "countries.name",
  });
  const { data: statusData } = useFetchFiltersQuery({
    field: "status",
  });
  const { data: typesData } = useFetchFiltersQuery({
    field: "type",
  });

  const yearsData: FilterType[] = _.range(1890, 2030).map((year) => {
    return {
      name: year.toString(),
      slug: year.toString(),
    };
  });

  let isLoading = true;
  if (genresData && countriesData && statusData && typesData) {
    isLoading = false;
    return {
      isLoading,
      data: {
        genres: [basicFilter, ...genresData],
        countries: [basicFilter, ...countriesData],
        status: [basicFilter, ...statusData],
        type: [basicFilter, ...typesData],
        year: [basicFilter, ...yearsData],
      },
    };
  }
  return {
    isLoading,
    data: null,
  };
};
