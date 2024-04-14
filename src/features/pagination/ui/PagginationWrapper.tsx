import { usePagination } from "../hooks/usePagination";
import { IPaginationProps } from "../model/types";
import { PaginationButtons } from "./PaginationButtons";

interface PaginationProps {
  children: React.ReactNode;
  type: "large" | "small";
}

const PaginationWrapper = ({
  children,
  ...paginationProps
}: PaginationProps & IPaginationProps) => {
  const ipaginationProps = usePagination({ ...paginationProps });
  return (
    <>
      {children}
      <PaginationButtons {...paginationProps} {...ipaginationProps} />
    </>
  );
};

export default PaginationWrapper;
