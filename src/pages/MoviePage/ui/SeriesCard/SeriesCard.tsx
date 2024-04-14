import { Person } from "@/entities/movies";
import { Episode } from "@/entities/movies/model/MovieApiTypes";
import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { useState } from "react";

interface SeriesCardProps {
  series: Episode;
}

export const SeriesCard = ({ series }: SeriesCardProps) => {
  const { still } = series;
  const cover = still.url ?? "https://st.kp.yandex.net/images/no-poster.gif";
  return (
    <>
      <li className="w-full cursor-pointer flex ">
        <img
          src={cover}
          alt={"Фотография"}
          className="object-cover w-[200px] h-[150px] rounded-2xl"
        />
        <p className="flex-1 flex items-center justify-center text-center">
          {series.name}
        </p>
      </li>
    </>
  );
};
