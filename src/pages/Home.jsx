import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import { Suspense, lazy } from "react";
// import HorizontalScrollCard from
import usefetch from "../hooks/usefetch";
const HorizontalScrollCard = lazy(() =>
  import("../components/HorizontalScrollCard")
);
const Home = () => {
  const trendingData = useSelector((state) => state.movieoData.bannerData);

  const { data: nowPlayingData } = usefetch("/movie/now_playing");
  const { data: toprated } = usefetch("/movie/top_rated");
  const { data: popularTVShowdata } = usefetch("/tv/popular");
  const { data: onAirShowdata } = usefetch("/tv/on_the_air");

  return (
    <div>
      <BannerHome />
      <Suspense fallback={<p>Loading...</p>}>
        <HorizontalScrollCard
          data={trendingData}
          heading="Trending"
          trending={true}
        />
        <HorizontalScrollCard
          data={nowPlayingData}
          heading="Now Playing"
          media_type={"movie"}
        />
        <HorizontalScrollCard
          data={toprated}
          heading="Top Rated Movies"
          media_type={"movie"}
        />
        <HorizontalScrollCard
          data={popularTVShowdata}
          heading="Popular TV Shows"
          media_type={"tv"}
        />
        <HorizontalScrollCard
          data={onAirShowdata}
          heading="On the Air"
          media_type={"tv"}
        />
      </Suspense>
    </div>
  );
};

export default Home;
