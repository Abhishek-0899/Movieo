import { lazy, Suspense, useMemo } from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import Divider from "../components/Divider";
import usefetch from "../hooks/usefetch";

// Lazy load horizontal scroll card
const HorizontalScrollCard = lazy(() =>
  import("../components/HorizontalScrollCard")
);

const DetaillPage = () => {
  const param = useParams();
  const imageUrl = useSelector((state) => state.movieoData.imageUrl);

  // Fetch main movie data
  const { data } = useFetchDetails(`/${param?.explore}/${param?.id}`);
  const { data: castData } = useFetchDetails(
    `/${param?.explore}/${param?.id}/credits`
  );
  const { data: similarMovieData } = usefetch(
    `/${param?.explore}/${param?.id}/similar`
  );
  const { data: RecommededMoviedata } = usefetch(
    `/${param?.explore}/${param?.id}/recommendations`
  );

  // Memoize duration calculation
  const duration = useMemo(() => {
    if (!data?.runtime) return { hours: 0, minutes: 0 };
    return {
      hours: Math.floor(data.runtime / 60),
      minutes: data.runtime % 60,
    };
  }, [data?.runtime]);

  // Memoize filtered cast list to prevent unnecessary recalculations
  const filteredCast = useMemo(() => {
    return castData?.cast?.filter((el) => el?.profile_path) || [];
  }, [castData]);

  return (
    <div>
      {/* Backdrop */}
      <div className="w-full h-[400px] relative hidden lg:block">
        <img
          className="h-full object-cover w-full"
          src={imageUrl + data?.backdrop_path}
          alt={data?.title || "Backdrop"}
          width={1280}
          height={720}
          loading="lazy"
          decoding="async"
          style={{ aspectRatio: "16/9" }}
        />
        <div className="absolute w-full h-full top-0 bg-gradient-to-b from-neutral-900 to-transparent"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-3 py-16 lg:py-1 flex gap-5 flex-col text-center justify-center lg:flex-row lg:gap-10">
        {/* Poster */}
        <div className="mx-auto relative w-fit lg:-mt-28 lg:mx-0">
          <img
            className="w-[450px] object-cover rounded min-h-20"
            src={imageUrl + data?.poster_path}
            alt={data?.title || "Poster"}
            width={450}
            height={675}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Movie details */}
        <div className="lg:text-left">
          <h2 className="text-4xl font-serif">
            {data?.title || data?.original_title}
          </h2>
          <p className="text-neutral-400 text-lg font-semibold">{data?.tagline}</p>
          <Divider />

          <div className="lg:text-left">
            <div className="flex items-center my-1 gap-3 justify-center lg:justify-start">
              <p>Rating: {Number(data?.vote_average).toFixed(1)}</p>
              <span>|</span>
              <p>Views: {data?.vote_count}</p>
              <span>|</span>
              <p>
                Duration: {duration.hours} hr {duration.minutes} min
              </p>
              <span>|</span>
            </div>

            <Divider />
            <div className="text-left my-6">
              <h2 className="text-2xl font-bold font-serif">Overview</h2>
              <p>{data?.overview}</p>
              <Divider />
              <div className="flex gap-4 justify-start">
                <p>Status: {data?.status}</p>
                <span>|</span>
                <p>Released on: {moment(data?.release_date).format("MMM Do YY")}</p>
              </div>
              <Divider />

              {/* Crew */}
              <div>
                <p className="font-serif text-lg">
                  Directed: <span className="font-bold text-xl">{castData?.crew[0]?.name}</span>
                </p>
                <Divider />
                <p className="font-serif text-lg">
                  Written: <span className="font-bold text-xl">{castData?.crew[3]?.name}</span>
                </p>
              </div>
              <Divider />

              {/* Star cast */}
              <div>
                <h2 className="text-lg lg:text-2xl font-serif my-2">Star Cast:</h2>
                <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-6">
                  {filteredCast.map((starcast) => (
                    <div key={starcast.id}>
                      <img
                        className="w-20 h-20 rounded-full object-cover"
                        src={imageUrl + starcast.profile_path}
                        alt={starcast.name}
                        loading="lazy"
                        decoding="async"
                      />
                      <p className="font-serif text-center">{starcast.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar & Recommended movies */}
      <div>
        <Suspense
          fallback={
            <div className="h-[300px] bg-neutral-900 rounded-lg animate-pulse" />
          }
        >
          <HorizontalScrollCard
            data={similarMovieData}
            heading={`Similar ${param?.explore}`}
            media_type={param?.explore}
          />
          <HorizontalScrollCard
            data={RecommededMoviedata}
            heading={`Recommended ${param?.explore}`}
            media_type={param?.explore}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default DetaillPage;
