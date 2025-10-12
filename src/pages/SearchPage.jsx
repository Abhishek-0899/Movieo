import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cards from "../components/Cards";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const query = location?.search?.slice(3);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          query: query,
          page: page,
        },
      });
      setData((prev) => [...prev, ...response.data.results]);
      // console.log(response.data);
      // setTotalPageNo(response.data.total_pages);
    } catch (e) {
      console.log("error while fetching explore data", e);
    }
  };

  useEffect(() => {
    if (query) {
      setPage(1);
      setData([]);
      fetchData();
    }
  }, [location?.search]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [page]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  console.log("location", location?.search);

  return (
    <div className="pt-16 my-2 mx-2 top-0">
      <div className="lg:hidden ">
        <input
          type="text"
          className="px-4 py-1 text-black font-serif bg-white w-full
          rounded-full"
          placeholder="Search movies"
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
        />
      </div>

      <div className="container mx-auto">
        <h2 className="capitalize text-lg font-bold my-3 lg:text-xl">
          Search Results
        </h2>
        {/* <div className="grid lg:justify-start grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-6 justify-center"> */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,max-content))] justify-center gap-6 lg:justify-start">
          {data.map((searchData, index) => {
            return (
              <Cards
                data={searchData}
                key={searchData.id + "search"}
                media_type={searchData.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
