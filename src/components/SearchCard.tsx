import { Link } from "react-router-dom";
import { HomePageVideos } from "../Types";

export const SearchCard = ({
  videoDuration,
  videoThumbnail,
  videoId,
}: HomePageVideos) => {
  return (
    <div className="flex gap-3">
      <div className="relative">
        <span className="absolute bottom-3 right-3 z-10 bg-gray-900 px-2 py-0.5 text-sm">
          {videoDuration}
        </span>

        <Link to={`/watch/${videoId}`}>
          <img src={videoThumbnail} alt="thumbnail" className="h-52 w-96" />
        </Link>
      </div>
    </div>
  );
};
