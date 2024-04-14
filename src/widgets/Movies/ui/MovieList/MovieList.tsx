import { MovieIdApiResponse } from "@/entities/movies";
import { MovieCard } from "../MovieCard/MovieCard";
import { withSkelton } from "@/shared";

interface MovieListProps {
  data?: MovieIdApiResponse[] | null;
}

const MovieList = ({ data: docs }: MovieListProps) => {
  if (docs?.length === 0) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <h1 className="font-medium text-2xl text-white">
          {"Данных по такому запросу нет"}
        </h1>
      </div>
    );
  }

  return (
    <ul className="grid max-sm:grid-cols-2 max-lg:grid-cols-3 max-sm:p-5 gap-[24px] lg:grid-cols-4">
      {docs?.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};

const MovieListWithSkeleton = withSkelton<MovieListProps>(
  MovieList,
  "column",
  "list",
  5
);

export default MovieListWithSkeleton;
