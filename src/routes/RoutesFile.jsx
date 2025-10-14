import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import DetaillPage from "../pages/DetaillPage,";
import SearchPage from "../pages/SearchPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { path: "", element: <Home /> },
      {path:":explore" , element:<ExplorePage/>},
      {path:":explore/:id" , element:<DetaillPage/>},
      {path:"search" , element:<SearchPage/>},
    ],
  },
]);

export default Router;
