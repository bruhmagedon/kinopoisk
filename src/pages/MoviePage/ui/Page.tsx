import {
  useFetchMovieByIdQuery,
  useFetchPostersQuery,
  useFetchSeasonsAndSeriesQuery,
} from "@/entities/movies";
import { Carousel } from "@/shared";
import { useParams } from "react-router-dom";
import { ActorsPagination } from "./ActorsPagination/ActorsPagination";
import { Disclosure } from "@/shared";
import { ReviewPagination } from "./ReviewPagination/ReviewPagination";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { setInputTerm, setSearchPanelStatus } from "@/entities/search";

export const MoviePage = () => {
  const isOpen = useAppSelector((state) => state.search.searchPanelStatus);
  const dispatch = useAppDispatch();

  let { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [id]);

  useEffect(() => {
    if (isOpen) {
      dispatch(setSearchPanelStatus(!isOpen));
      dispatch(setInputTerm(""));
    }
  }, []);

  const { data: movieData, isLoading: movieLoading } = useFetchMovieByIdQuery({
    id,
  });
  const { data: postersData, isLoading: postersLoading } = useFetchPostersQuery(
    { movieId: id }
  );
  const { data: seasonsData, isLoading: seasonsLoading } =
    useFetchSeasonsAndSeriesQuery({
      movieId: id,
    });

  if (movieLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <h1 className="font-medium text-2xl text-white">{"Загрузка..."}</h1>
      </div>
    );
  }

  return (
    <div className="py-[24px] relative">
      <div className="flex max-lg:flex-col max-lg:items-center max-lg:gap-8">
        <div className="w-[300px] flex lg:pr-6">
          <img
            src={
              movieData.poster.url ??
              "https://st.kp.yandex.net/images/no-poster.gif"
            }
            alt={"Фотография"}
            className="object-cover w-full h-[400px] rounded-2xl border-2 border-gray-800"
          />
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex max-sm:flex-col bg-panel-darker-bg rounded-lg text-white">
            <div className="flex-3 p-5 pr-8 flex flex-col gap-2">
              <div>
                <h1 className="text-4xl font-bold mb-2">{movieData.name}</h1>
                <p className="text-gray-500">{movieData.alternativeName}</p>
              </div>
              <div className="flex gap-2">
                <p>{movieData.countries[0].name}</p>
                <p>{movieData.year + " г."}</p>
              </div>
              <div className="flex gap-2">
                {movieData.genres.map((genre) => genre.name + " ")}
              </div>
              <p>{movieData.description}</p>
            </div>
            <div className="flex-1 flex flex-col p-3 gap-2 max-sm:p-5">
              <p className="text-3xl font-bold text-green-400">
                {movieData.rating.kp.toFixed(1)}
              </p>
              <p className="text-sm">{movieData.votes.imdb + " оценок"}</p>
            </div>
          </div>

          <div className="flex h-[400px] gap-3 text-white font-medium max-sm:h-full max-sm:flex-col max-sm:p-5">
            {postersData?.docs.length > 0 && (
              <div className="flex flex-col flex-3 gap-5">
                <h2>Кадры</h2>
                <Carousel posters={postersData} isLoading={postersLoading} />
              </div>
            )}
            {movieData.similarMovies?.length > 0 && (
              <div className="flex flex-col flex-1 gap-5">
                <h2>Похожие фильмы</h2>
                <Carousel similarMovie={movieData.similarMovies} />
              </div>
            )}
          </div>

          {movieData.persons.filter((person) => person.enProfession == "actor")
            .length > 0 && (
            <div className="flex flex-col gap-5 text-white font-medium max-sm:p-5">
              <h2>Актеры</h2>
              <ActorsPagination
                persons={movieData.persons.filter(
                  (person) => person.enProfession == "actor"
                )}
              />
            </div>
          )}

          <div className="flex text-white gap-3 max-lg:flex-col">
            {movieData.isSeries ? (
              <div className="flex flex-col flex-1 gap-5">
                <h2 className="font-medium">Сезоны и серии</h2>
                <Disclosure
                  seasonsData={seasonsData}
                  isLoading={seasonsLoading}
                />
              </div>
            ) : null}

            <ReviewPagination movieId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};
