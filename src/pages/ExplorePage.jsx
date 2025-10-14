import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  console.log(params.explore);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          pageNo: pageNo,
        },
      });
      setData((prev) => [...prev, ...response.data.results]);
      // console.log(response.data);
      // setTotalPageNo(response.data.total_pages);
    } catch (e) {
      console.log("error while fetching explore data", e);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);
  useEffect(() => {
    setPageNo();
    setData([]);
    fetchData();
  }, [pageNo, params.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <h2 className="capitalize text-lg font-bold my-2 lg:text-xl">
          popular {params.explore}
          <div className="grid grid-cols-[repeat(auto-fit,230px)] justify-center lg:justify-start gap-6">
            {data.map((exploreData, index) => {
              return (
                <Cards
                  data={exploreData}
                  key={index}
                  media_type={params.explore}
                />
              );
            })}
          </div>
        </h2>
      </div>
    </div>
  );
};

export default ExplorePage;
