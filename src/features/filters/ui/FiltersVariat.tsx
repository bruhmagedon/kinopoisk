import { FilterApiResponse } from "@/entities/filters";
import { SelectFilter } from "./SelectFilter";

interface FiltersVariantProps {
  text: string;
  data: FilterApiResponse;
  type?: "genres.name" | "countries.name" | "status" | "type" | "year";
}

export const FiltersVariant = ({ data, type, text }: FiltersVariantProps) => {
  return (
    <div className="">
      <p>{text}</p>
      <SelectFilter filterData={data} type={type} />
    </div>
  );
};
