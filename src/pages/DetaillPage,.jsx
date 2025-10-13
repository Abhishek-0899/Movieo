import React from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";

const DetaillPage = () => {
  const param = useParams();

  const { data } = useFetchDetails(`/${param?.explore}/${param?.id}`);
  const { data: castData } = useFetchDetails(
    `/${param?.explore}/${param?.id}/credits`
  );
  const imageUrl = useSelector((state) => state.movieoData.imageUrl);
  console.log(data);
  console.log(castData);

  return (
    <div>
      <div className="w-full h-[400px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            className="h-full object-cover w-full"
            src={imageUrl + data?.backdrop_path}
            alt=""
          />
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-b from-neutral-900 to-transparent"></div>
      </div>

      <div className="container mx-auto px-3 py-16 lg:py-1">
        <div className="lg:-mt-28 relative mx-auto lg:ml-0 w-fit">
          <img
            className="h-full w-60 object-cover rounded"
            src={imageUrl + data?.poster_path}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DetaillPage;
