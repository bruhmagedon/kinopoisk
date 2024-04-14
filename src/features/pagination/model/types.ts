export interface IPaginationProps {
  type?: "large" | "small";
  totalPages?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  handleNextPage?: () => void;
  handlePrevPage?: () => void;
  handlePageClick?: (pageNumber: number) => void;
  handleStartPage?: () => void;
  handleEndPage?: () => void;
  currentPage?: number;
  limit?: number;
  siblings?: number;
}
