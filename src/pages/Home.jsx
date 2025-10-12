import BannerHome from "../components/BannerHome";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import usefetch from "../hooks/usefetch";

const Home = () => {
  const trendingData = useSelector((state) => state.movieoData.bannerData);

  const { data: nowPlayingData } = usefetch("/movie/now_playing");
  const { data: toprated } = usefetch("/movie/top_rated");
  const { data: popularTVShowdata } = usefetch("/tv/popular");

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trendingData}
        heading="Trending"
        trending={true}
      />
      <HorizontalScrollCard data={nowPlayingData} heading="Now Playing" />
      <HorizontalScrollCard data={toprated} heading="Top Rated Movies" />
      <HorizontalScrollCard data={popularTVShowdata} heading="Popular TV Shows" />
    </div>
  );
};

export default Home;
