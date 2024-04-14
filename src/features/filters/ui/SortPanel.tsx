import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { Select } from "@/shared";
import { LIST_VIEW_VARIANTS, SORT_DATA } from "../model/constants";

export const SortPanel = () => {
  const dispatch = useAppDispatch();
  const sort = useAppSelector((state) => state.sort.sort);
  const viewCount = useAppSelector((state) => state.sort.viewCount);

  return (
    <div className="bg-panel-darker-bg text-white w-full py-6 px-3 flex flex-col gap-3 rounded-lg">
      <div className="">
        <p>{"Тип сортировки"}</p>
        <Select sortData={SORT_DATA} type="sort" initialValue={sort} />
      </div>
      <div className="">
        <p>{"Сколько показывать"}</p>
        <Select
          sortData={LIST_VIEW_VARIANTS}
          type="viewCount"
          initialValue={viewCount}
        />
      </div>
    </div>
  );
};
