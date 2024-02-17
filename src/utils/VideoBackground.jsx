import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";
import { YOUTUBE_EMBED_URL } from "./constant/constants";

const VideoBackground = ({ movieId, currentIndex, videoIndex }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  console.log(trailer, "ttt");

  useMovieTrailer(movieId);

  return (
    <div className="w-screen h-[50vh] text-5xl text-white cursor-pointer aspect-auto overflow-hidden">
      <iframe
        className="w-screen h-full ps-[37%] aspect-auto scale-125"
        src={
          YOUTUBE_EMBED_URL +
          trailer[videoIndex]?.trailer?.key +
          `?showinfo=0&autoplay=${
            currentIndex === videoIndex
          }&mute=1&controls=0&loop=1&rel=0&autohide=1&start=5`
        }
        title="video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
