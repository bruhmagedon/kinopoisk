import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { FilterApiResponse, setFilter } from "@/entities/filters";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import _ from "lodash";

enum FILTER_TYPES {
  genres = "genres.name",
  countries = "countries.name",
  status = "status",
  type = "type",
  year = "year",
}

interface SelectFilterProps {
  filterData: FilterApiResponse;
  type?: "genres.name" | "countries.name" | "status" | "type" | "year";
  initialValue?: string;
}
export const SelectFilter = ({
  filterData,
  type,
  initialValue = "Нет",
}: SelectFilterProps) => {
  const [selected, setSelected] = useState<string>(() => {
    const storedValue = getFilterFromLocalStorage(type);
    return storedValue || initialValue || filterData[0].name;
  });

  const dispatch = useAppDispatch();
  const filterValue = useAppSelector((state) => state.filters.filters[type]);

  useEffect(() => {
    setSelected(filterValue || initialValue);
  }, [filterValue, initialValue]);

  useEffect(() => {
    switch (type) {
      case FILTER_TYPES.genres: {
        dispatch(
          setFilter({
            filterName: "genres.name",
            filterValue: selected.toLowerCase(),
          })
        );
        break;
      }
      case FILTER_TYPES.countries: {
        dispatch(
          setFilter({
            filterName: "countries.name",
            filterValue: selected,
          })
        );
        break;
      }
      case FILTER_TYPES.status: {
        dispatch(
          setFilter({
            filterName: "status",
            filterValue: selected.toLowerCase(),
          })
        );
        break;
      }
      case FILTER_TYPES.type: {
        dispatch(
          setFilter({ filterName: "type", filterValue: selected.toLowerCase() })
        );
        break;
      }
      case FILTER_TYPES.year: {
        dispatch(
          setFilter({ filterName: "year", filterValue: selected.toLowerCase() })
        );
        break;
      }
      default: {
        break;
      }
    }
    saveFilterToLocalStorage(type, selected);
  }, [selected]);

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-input-bg hover:bg-[#353535] py-2 pl-3 pr-10 text-left shadow-md sm:text-sm">
            <span className="block truncate">{_.capitalize(selected)}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-input-bg text-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filterData.map((item, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-primary text-black" : "text-white"
                    }`
                  }
                  value={item.name}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {_.capitalize(item.name)}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

const saveFilterToLocalStorage = (filterName: string, filterValue: string) => {
  localStorage.setItem(filterName, filterValue);
};

const getFilterFromLocalStorage = (filterName: string) => {
  return localStorage.getItem(filterName);
};
