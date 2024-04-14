import { useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { MovieIdApiResponse } from "@/entities/movies";
import { useNavigate } from "react-router-dom";
import { SimilarMovie } from "@/entities/movies/model/MovieTypes";

interface MovieCardProps {
  movie: MovieIdApiResponse | SimilarMovie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const [openPopover, setOpenPopover] = useState(false);

  const navigate = useNavigate();

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  const onNavigate = () => {
    navigate(`/movie/${movie.id}`);
  };

  const cover =
    movie.poster?.url ?? "https://st.kp.yandex.net/images/no-poster.gif";
  return (
    <>
      <li
        className="w-full h-[300px] cursor-pointer relative"
        onClick={onNavigate}
      >
        <Popover
          open={openPopover}
          handler={setOpenPopover}
          placement="bottom"
          animate={{
            mount: { scale: 1, y: -3 },
            unmount: { scale: 0, y: 0 },
          }}
        >
          <PopoverHandler {...triggers}>
            <img
              src={cover}
              alt={"Фотография"}
              className="object-cover w-full h-full rounded-2xl"
            />
          </PopoverHandler>
          <PopoverContent className="z-30 rounded-lg max-w-[250px] flex justify-center items-center text-elipsis overflow-hidden text-sm p-2 text-white bg-panel-darker-bg border-gray-700 border-[1px]">
            {movie.name
              ? movie.name.replace(/\s/g, "") == ""
                ? movie.alternativeName
                : movie.name
              : movie.alternativeName || movie.enName}
          </PopoverContent>
        </Popover>
        {movie.rating?.kp ? (
          <div className="absolute z-30 w-[30px] h-[30px] bg-input-bg border-[1px] border-white text-white font-medium left-2 top-2 rounded-lg flex items-center justify-center">
            {movie.rating.kp?.toFixed(1)}
          </div>
        ) : null}
      </li>
    </>
  );
};
