import { SearchPanel } from "@/features/search";
import { Button } from "@/shared";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/");
  };

  return (
    <header className="bg-panel-darker-bg rounded-lg">
      <nav className="flex justify-center lg:justify-between items-center px-36 max-lg:px-5 py-5 max-lg:gap-4">
        <div className="max-lg:flex-0 cursor-pointer" onClick={onNavigate}>
          <span className="text-white text-lg font-medium hover:text-primary">
            Главная
          </span>
        </div>
        <SearchPanel />
        <div className="flex justify-end max-lg:hidden">
          <Button className="invisible">Аккаунт</Button>
        </div>
      </nav>
    </header>
  );
};
