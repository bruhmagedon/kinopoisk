import { FiltersPanel, SortPanel } from "@/features/filters";

export const Filters = () => {
  return (
    <div className="flex flex-col gap-6 max-lg:w-full max-lg:p-5">
      <SortPanel />
      <FiltersPanel />
    </div>
  );
};
