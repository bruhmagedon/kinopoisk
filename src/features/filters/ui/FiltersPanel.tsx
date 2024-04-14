import { withSkelton } from "@/shared";
import { useAppDispatch } from "@/app/store/store";
import { useFilters, useFiltersReturnType } from "../hooks/useFilters";
import { Button } from "@/shared";
import { FiltersVariant } from "./FiltersVariat";
import { resetFilters } from "@/entities/filters";
import { useEffect } from "react";

interface FiltersPanelProps {
  data?: useFiltersReturnType["data"];
  isLoading?: boolean;
}

export const FiltersPanel = () => {
  const { isLoading, data } = useFilters();

  return (
    <>
      <div className="bg-panel-darker-bg text-white w-full py-6 px-3 flex flex-col gap-3 rounded-2xl">
        <FiltersPanelWithSekeleton isLoading={isLoading} data={data} />
      </div>
    </>
  );
};

const View = ({ data }: FiltersPanelProps) => {
  const dispatch = useAppDispatch();

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <>
      <h2 className="text-xl font-medium">Фильтры</h2>
      <FiltersVariant data={data.genres} text="По жанрам" type="genres.name" />
      <FiltersVariant
        data={data.countries}
        text="По странам"
        type="countries.name"
      />
      <FiltersVariant data={data.type} text="По типам" type="type" />
      <FiltersVariant data={data.status} text="По статусу" type="status" />
      <FiltersVariant data={data.year} text="По году" type="year" />
      <Button
        onClick={handleResetFilters}
        className="bg-input-bg text-white rounded-lg h-[36px] hover:bg-[#353535] mt-3 font-medium"
      >
        {"Сбросить"}
      </Button>
    </>
  );
};

const FiltersPanelWithSekeleton = withSkelton<FiltersPanelProps>(
  View,
  "column",
  "list",
  5
);
