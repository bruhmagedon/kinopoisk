import { Person } from "@/entities/movies";
import { PaginationWrapper, getPaginatedData } from "@/features/pagination";
import { useState } from "react";
import { ActorCard } from "../ActorCard/ActorCard";

interface ActorsPaginationProps {
  persons: Person[];
}

export const ActorsPagination = ({ persons }: ActorsPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(6);

  return (
    <PaginationWrapper
      type="small"
      limit={limit}
      siblings={1}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPages={Math.ceil(persons.length / limit)}
    >
      {
        <div className="flex flex-col gap-8 items-center">
          <ActorsList persons={getPaginatedData(persons, limit, currentPage)} />
        </div>
      }
    </PaginationWrapper>
  );
};

const ActorsList = ({ persons }: ActorsPaginationProps) => {
  return (
    <ul className="grid lg:grid-cols-6 max-lg:grid-row-3 max-lg:grid-cols-3 gap-[24px] lg:h-[200px]">
      {persons.map((person, index) => {
        return <ActorCard person={person} key={index} />;
      })}
    </ul>
  );
};
