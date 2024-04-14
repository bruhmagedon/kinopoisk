import { Person, useFetchReviewQuery } from "@/entities/movies";
import { PaginationWrapper, getPaginatedData } from "@/features/pagination";
import { useEffect, useState } from "react";
import { ActorCard } from "../ActorCard/ActorCard";
import { ReviewData } from "@/entities/movies/model/MovieApiTypes";
import { ReviewCard } from "../ReviewCard/ReviewCard";

interface ReviewPaginationProps {
  movieId: string;
}

export const ReviewPagination = ({ movieId }: ReviewPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(4);

  const { data, isLoading } = useFetchReviewQuery({
    movieId: movieId,
    limit,
    page: currentPage,
  });

  if (isLoading) {
    return <div>Загрузка</div>;
  }

  if (data.docs.length > 0) {
    return (
      <div className="flex flex-col flex-1 gap-5 max-sm:p-5">
        <h2 className="font-medium max-sm:p-4">Отзывы</h2>
        <div className="flex flex-col gap-4">
          <PaginationWrapper
            limit={limit}
            siblings={1}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={data.pages}
            type="small"
          >
            {<ReviewPaginationList isLoading={isLoading} rewiews={data.docs} />}
          </PaginationWrapper>
        </div>
      </div>
    );
  }
};

interface ReviewPaginationListProps {
  rewiews: ReviewData[];
  isLoading: boolean;
}

const ReviewPaginationList = ({
  rewiews,
  isLoading,
}: ReviewPaginationListProps) => {
  if (isLoading) {
    return <div>Загрузка</div>;
  }

  return (
    <ul className="grid grid-rows-4 gap-[24px]">
      {rewiews.map((review) => {
        return <ReviewCard review={review} key={review.id} />;
      })}
    </ul>
  );
};
