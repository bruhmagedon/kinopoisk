import { Person } from "@/entities/movies";
import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { useState } from "react";

interface ActorCardProps {
  person: Person;
}

export const ActorCard = ({ person }: ActorCardProps) => {
  const [openPopover, setOpenPopover] = useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <>
      <li className="w-full cursor-pointer">
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
              src={person.photo}
              alt={"Фотография"}
              className="object-cover lg:w-full h-full rounded-2xl max-lg:w-[100px] max-lg:h-[200px]"
            />
          </PopoverHandler>
          {/* Текст при наведении */}
          <PopoverContent className="z-50 rounded-lg max-w-[250px] flex justify-center items-center text-elipsis overflow-hidden  text-white bg-panel-darker-bg">
            {person.name}
          </PopoverContent>
        </Popover>
      </li>
    </>
  );
};
