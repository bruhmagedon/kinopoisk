import { MovieIdApiResponse } from "@/entities/movies";
import { useNavigate } from "react-router-dom";

interface SearchResulListProps {
  data: MovieIdApiResponse[];
}

export const SearchResulList = ({ data }: SearchResulListProps) => {
  const sortedData = [...data].sort((a, b) => {
    const aVotes = Number(a.votes?.kp);
    const bVotes = Number(b.votes?.kp || 0);

    return bVotes - aVotes;
  });

  return (
    <div className="flex flex-col h-full overflow-auto">
      {sortedData.map((movie) => (
        <SearchResulCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export const SearchResulCard = ({ movie }: { movie: MovieIdApiResponse }) => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate(`/movie/${movie.id}`);
  };

  const cover =
    movie.poster?.url ?? "https://st.kp.yandex.net/images/no-poster.gif";
  return (
    <div
      className="text-white flex p-3 gap-8 hover:bg-input-bg cursor-pointer"
      onClick={onNavigate}
    >
      <img
        src={cover}
        alt={"Фотография"}
        className="object-cover w-[35px] h-[50px] rounded-lg"
      />
      <div className="flex-1">
        <p className="font-medium">{movie.name}</p>
        <p className="text-sm text-gray-500">{movie.alternativeName}</p>
      </div>
    </div>
  );
};
