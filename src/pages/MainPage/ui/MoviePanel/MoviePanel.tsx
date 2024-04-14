import { useEffect, useState } from "react";
import { useAppSelector } from "@/app/store/store";
import { useFetchMoviesQuery } from "@/entities/movies";
import { PaginationWrapper } from "@/features/pagination";
import { MovieList } from "@/widgets/Movies";
import { SORT_MAP } from "@/features/filters";

const TOTAL = 100;
type SortType = "Отсутствует" | "По названию" | "По рейтингу" | "По году";

export const MoviePanel = () => {
  const keyword = useAppSelector((state) => state.search.keyword);
  const filters = useAppSelector((state) => state.filters.filters);
  const limit = useAppSelector((state) => Number(state.sort.viewCount));
  const sort = useAppSelector((state) => state.sort.sort);

  // Пагинация
  const [currentPage, setCurrentPage] = useState<number>(() => {
    return getPageFromLocalStorage();
  });
  const sortValue = SORT_MAP[sort as SortType] || "";

  const { data, isLoading } = useFetchMoviesQuery({
    sortField: sortValue,
    limit,
    page: currentPage,
    ...filters,
    query: keyword,
  });

  useEffect(() => {
    clearPageFromLocalStorage();
  }, []);

  useEffect(() => {
    savePageToLocalStorage(currentPage);
  }, [currentPage]);

  return (
    <section className="flex flex-col gap-12">
      <PaginationWrapper
        limit={limit}
        siblings={1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={TOTAL}
        type="large"
      >
        {
          <div className="flex flex-col gap-8">
            <MovieList data={data && data.docs} isLoading={isLoading} />
          </div>
        }
      </PaginationWrapper>
    </section>
  );
};

const savePageToLocalStorage = (page: number) => {
  localStorage.setItem("currentPage", JSON.stringify(page));
};

const getPageFromLocalStorage = () => {
  const storedPage = localStorage.getItem("currentPage");
  return storedPage ? JSON.parse(storedPage) : 1;
};

const clearPageFromLocalStorage = () => {
  localStorage.removeItem("currentPage");
};
