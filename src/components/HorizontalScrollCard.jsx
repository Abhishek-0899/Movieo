import React, { useRef } from "react";
import Cards from "./Cards";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import "./../App.css";

const HorizontalScrollCard = ({ data = [], heading,trending,media_type }) => {
  const container = useRef();

  const handleNext = () => {
    container.current.scrollLeft += 200;
  };

  const handlePrev = () => {
    container.current.scrollLeft -= 200;
  };

  return (
    <div className="container mx-auto px-3 my-8">
      <h2 className="text-lg lg:text-3xl font-bold mb-4 text-white">
        {heading}
      </h2>
      <div className="relative">
        <div
          ref={container}
          className="scrollbar-none grid grid-cols-[repeat(auto-fit,230px)] scroll-smooth
          transition-all duration-300 ease-in-out
            grid-flow-col overflow-x-scroll overflow-hidden relative z-10
            gap-4"
        >
          {data.map((data, index) => {
            return (
              <Cards
                key={data.id + "heading" + index}
                trending={trending}
                data={data}
                index={index + 1}
                media_type={media_type}
              />
            );
          })}
        </div>

        <div className="absolute top-0 p-1 hidden lg:flex justify-between w-full h-full items-center">
          <button
            onClick={handlePrev}
            className="bg-white text-black rounded-full -ml-3 z-10"
          >
            <AiFillCaretLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-white text-black rounded-full -mr-3 z-10"
          >
            <AiFillCaretRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
