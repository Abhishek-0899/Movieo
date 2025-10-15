import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const Home = lazy(() => import("../pages/Home"));
const ExplorePage = lazy(() => import("../pages/ExplorePage"));
const DetaillPage = lazy(() => import("../pages/DetaillPage,"));
const SearchPage = lazy(() => import("../pages/SearchPage"));

const withSuspense = (Component) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: withSuspense(Home) },
      { path: ":explore", element: withSuspense(ExplorePage) },
      { path: ":explore/:id", element: withSuspense(DetaillPage) },
      { path: "search",  element: withSuspense(SearchPage) },
    ],
  },
]);

export default Router;
