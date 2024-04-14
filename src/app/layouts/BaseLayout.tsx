import { Header } from "@/widgets/Header";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="h-dvh relative mx-auto max-w-[1160px] py-[50px] bg-darker-bg">
      <Header />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
