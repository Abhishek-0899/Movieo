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
  const { data: onAirShowdata } = usefetch("/tv/on_the_air");

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trendingData}
        heading="Trending"
        trending={true}
      />
      <HorizontalScrollCard data={nowPlayingData} heading="Now Playing" media_type={"movie"} />
      <HorizontalScrollCard data={toprated} heading="Top Rated Movies" media_type={"movie"} />
      <HorizontalScrollCard data={popularTVShowdata} heading="Popular TV Shows" media_type={"tv"} />
      <HorizontalScrollCard data={onAirShowdata} heading="On the Air"media_type={"tv"} />
    </div>
  );
};

export default Home;
