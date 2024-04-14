import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import _ from "lodash";
import { useAppDispatch } from "@/app/store/store";
import { setSort } from "@/entities/filters";

type SortTypes = {
  name: string;
};

interface SelectProps {
  sortData: SortTypes[];
  type?: "sort" | "viewCount";
  initialValue?: string;
}

export const Select = ({ sortData, type }: SelectProps) => {
  const [selected, setSelected] = useState(sortData[0].name);
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (type) {
      case "sort": {
        dispatch(setSort({ key: "sort", value: selected }));
        break;
      }
      case "viewCount": {
        dispatch(setSort({ key: "viewCount", value: selected }));
        break;
      }
      default: {
        break;
      }
    }
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
              {sortData.map((item, index) => (
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
