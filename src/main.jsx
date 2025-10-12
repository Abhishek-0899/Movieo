// index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Meta, RouterProvider } from "react-router-dom";
import Router from "./routes/routes.jsx";
import axios from "axios";
import { store } from "./store/store.jsx";
import { Provider } from "react-redux";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`;



createRoot(document.getElementById("root")).render(
  // <StrictMode>

    <Provider store={store}>

    <RouterProvider router={Router} />
  {/* // </StrictMode> */}
    </Provider>
);
