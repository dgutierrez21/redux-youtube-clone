import { Link } from "react-router-dom";
import { HomePageVideos } from "../Types";

export const Card = ({
  videoDuration,
  videoThumbnail,
  videoId,
}: HomePageVideos) => {
  return (
    <div className="flex h-60 w-64 flex-col gap-3">
      <div className="relative">
        <span className="absolute bottom-3 right-3 z-10 bg-gray-900 px-2 py-0.5 text-sm">
          {videoDuration}
        </span>

        <Link to={`/watch/${videoId}`}>
          <img src={videoThumbnail} alt="thumbnail" className="h-44 w-72" />
        </Link>
      </div>
    </div>
  );
};
