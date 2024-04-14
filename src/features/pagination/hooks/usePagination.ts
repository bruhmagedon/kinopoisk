interface usePaginationProps {
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  totalPages?: number;
  currentPage?: number;
}

export const usePagination = ({
  setCurrentPage,
  totalPages,
}: usePaginationProps) => {
  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
  const handleStartPage = () => {
    setCurrentPage(1);
  };
  const handleEndPage = () => {
    setCurrentPage(totalPages);
  };

  return {
    handleNextPage,
    handlePrevPage,
    handlePageClick,
    handleStartPage,
    handleEndPage,
  };
};
