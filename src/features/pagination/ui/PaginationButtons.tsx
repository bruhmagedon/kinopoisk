import { Button } from "../../../shared/ui/Button";
import ArrowStart from "@/shared/assets/icons/arrow-start.svg";
import ArrowPrev from "@/shared/assets/icons/arrow-prev.svg";
import ArrowNext from "@/shared/assets/icons/arrow-next.svg";
import ArrowEnd from "@/shared/assets/icons/arrow-end.svg";
import { IPaginationProps } from "../model/types";
import { usePaginationRange } from "../hooks/usePaginationRange";

export const PaginationButtons = ({
  totalPages,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
  handleEndPage,
  handleStartPage,
  currentPage,
  limit,
  siblings,
  type,
}: IPaginationProps) => {
  const activePageStyles = "font-medium bg-primary cursor-auto";
  const array = usePaginationRange(totalPages, currentPage, limit, siblings);
  const textStatus = type === "small" ? "text-lg" : "text-2xl";
  const sizeStatus =
    type === "small"
      ? " w-[30px] h-[30px] "
      : " max-sm:w-[30px] max-sm:h-[30px] w-[45px] h-[45px] ";

  return (
    <>
      <div
        className={
          "flex items-center w-full justify-center gap-[12px] " + textStatus
        }
      >
        <Button
          onClick={handleStartPage}
          disabled={currentPage <= 1}
          className={"paggination-button pagination-button-hover " + sizeStatus}
        >
          {<ArrowStart pointerEvents="none" />}
        </Button>
        <Button
          disabled={currentPage <= 1}
          onClick={handlePrevPage}
          className={"paggination-button pagination-button-hover " + sizeStatus}
        >
          {<ArrowPrev />}
        </Button>
        <div className="flex items-center justify-center">
          {array.map((index) => {
            const activePage = currentPage === (index as number);
            return (
              <button
                onClick={() => handlePageClick(index as number)}
                className={
                  "paggination-button pb-[3px] pagination-button-hover " +
                  sizeStatus +
                  (activePage ? activePageStyles : "cursor-pointer")
                }
                key={index}
                disabled={activePage || index === "..."}
              >
                {index}
              </button>
            );
          })}
        </div>
        <Button
          disabled={currentPage >= totalPages}
          onClick={handleNextPage}
          className={"paggination-button pagination-button-hover " + sizeStatus}
        >
          {<ArrowNext />}
        </Button>
        <Button
          disabled={currentPage >= totalPages}
          onClick={handleEndPage}
          className={"paggination-button pagination-button-hover " + sizeStatus}
        >
          {<ArrowEnd />}
        </Button>
      </div>
    </>
  );
};
