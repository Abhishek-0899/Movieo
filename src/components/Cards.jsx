import React from "react";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import { Link } from "react-router-dom";
const Cards = ({ data, trending, index, media_type }) => {
  const imageUrl = useSelector((state) => state.movieoData.imageUrl);
  const mediaType = data.media_type ?? media_type;

  return (
    <Link
      to={
        data?.mediaType
          ? `/${data?.mediaType}/${data?.id}`
          : `/movie/${data?.id}`
      }
      className="w-full min-w-[230px] max-w-[230px] rounded h-full overflow-hidden
    relative block hover:scale-110 transition-all duration-300 ease-in-out"
    >
      <img src={imageUrl + data.poster_path} alt={data.title} />
      <div className="absolute top-3 left-4">
        {trending && (
          <div
            className="py-2 px-3 backdrop-blur-xl overflow-hidden
         rounded-full bg-black/60"
          >
            #{index} Trending
          </div>
        )}
      </div>
      <div
        className="absolute bottom-0 h-16 backdrop-blur-3xl w-full p-2 text-white
      bg-black/60 text-l font-semibold"
      >
        <h2 className="text-ellipsis line-clamp-1">
          {data?.title || data?.name}
        </h2>
        <div className="text-lg flex justify-between text-neutral-500">
          <p>{moment(data?.release_date).format("ll")}</p>
          <p className="bg-gray-400 text-white px-1 rounded-full">
            Rating : {Number(data?.vote_average?.toFixed(1))}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
