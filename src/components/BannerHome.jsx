import { useEffect, useRef, useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

import { useSelector } from "react-redux";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieoData.bannerData);
  // console.log(bannerData);
  const imageUrl = useSelector((state) => state.movieoData.imageUrl);

  const [currentImage, setCurrentImage] = useState(0);
  const intervalref = useRef(null);

  const handleNext = () => {
    setCurrentImage((prev) => (prev < bannerData.length - 1 ? prev + 1 : 0));
  };
  const handlePrev = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : bannerData.length - 1));
  };

  // 1st way
  //   useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage(prev =>
  //       prev < bannerData.length - 1 ? prev + 1 : 0
  //     );
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [bannerData]);

  const startAutoplay = () => {
    stopAutoplay();
    intervalref.current = setInterval(handleNext, 2000);
  };

  const stopAutoplay = () => {};
  if (intervalref.current) {
    clearInterval(intervalref.current);
  }

  // 2nd way
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [bannerData]);

  return (
    <section className="w-full h-full">
      <div
        className="relative overflow-hidden w-full"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div className="flex min-h-full max-h-[95vh] overflow-hidden">
          {bannerData.map((data, index) => {
            return (
              <div
                key={data.id + "bannerHome" + index}
                className="min-w-full min-h-[450px] overflow-hidden lg:min-h-full relative group
            "
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                <div className="w-full h-full">
                  <img
                    className="w-full h-full object-cover"
                    src={imageUrl + data.backdrop_path}
                    alt=""
                  />
                </div>

                {/* button next and previous */}
                <div
                  className=" text-4xl group-hover:lg:flex hidden
              absolute top-0 w-full h-full flex items-center justify-between px-4"
                >
                  <button
                    onClick={handlePrev}
                    className="bg-white z-10 p-2 rounded-full text-2xl text-black"
                  >
                    <AiFillCaretLeft />
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-white z-10 p-2 rounded-full text-2xl text-black"
                  >
                    <AiFillCaretRight />
                  </button>
                </div>

                <div
                  className="absolute top-0 w-full h-full
              bg-gradient-to-t from-neutral-900 to-transparent"
                ></div>

                <div className="container mx-auto">
                  <div className="w-full absolute bottom-0 max-w-md px-2">
                    <h2
                      className="font-bold drop-shadow-3xl
                text-2xl lg:text-4xl text-white"
                    >
                      {data?.name || data?.title}
                    </h2>
                    <p className="text-ellipsis line-clamp-2 my-2 font-semibold text-white">
                      {data.overview}
                    </p>
                    <div className="flex gap-5">
                      <h3>
                        Rating : {Number(data.vote_average.toFixed(1))} ⭐
                      </h3>
                      <h3>Views : {Number(data.popularity.toFixed(0))}</h3>
                    </div>
                    <button
                      className="bg-white px-2 py-3 text-black font-bold 
        rounded-[20px] mt-4 mb-4 bg-gradient-to-l from-red-700 to-orange-500 
        cursor-pointer transition transform duration-300
        hover:bg-gradient-to-r hover:from-red-400 hover:to-orange-100"
                    >
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
