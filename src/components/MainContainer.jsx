import { useSelector } from "react-redux";
import VideoTitle from "../utils/VideoTitle";
import VideoBackground from "../utils/VideoBackground";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const trailerMovies = movies.slice(0, 5);
  console.log(trailerMovies, "main");

  return (
    <div className="text-white mx-auto ms-6 w-[95%] mt-5">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 15000,
          }),
        ]}
      >
        <CarouselContent>
          {trailerMovies?.map((movie, index) => {
            const { adult, title, original_language, vote_average, id } = movie;
            return (
              <CarouselItem key={index}>
                <div className="p-1">
                  <VideoTitle
                    title={title}
                    language={original_language}
                    isAdult={adult}
                    rating={vote_average}
                  />
                  <VideoBackground movieId={id} currentVideo={index} />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MainContainer;
