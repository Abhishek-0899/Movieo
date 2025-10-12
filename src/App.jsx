import React, { use, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBannerData, setImage } from "./store/MovieoSlice";

function App() {
  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/day");
      dispatch(setBannerData(response.data.results));
      // console.log(response.data.results);
    } catch (e) {
      console.log("error", e);
    }
  };
  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration");
      dispatch(setImage(response.data.images.secure_base_url + "original"));
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);
  return (
    <main className="pb-15 lg:pb-0">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;
