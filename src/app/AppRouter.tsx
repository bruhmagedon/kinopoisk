import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "@/pages/MainPage";
import { MoviePage } from "@/pages/MoviePage";
import { ErrorPage } from "@/pages/ErrorPage";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/movie/:id", element: <MoviePage /> },
    ],
  },
]);
