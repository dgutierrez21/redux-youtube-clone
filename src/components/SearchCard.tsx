import { Link } from "react-router-dom";
import { HomePageVideos } from "../Types";

export const SearchCard = ({
  videoDuration,
  videoThumbnail,
  videoId,
  videoTitle,
  channelInfo,
  videoViews,
  videoAge,
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

      <div className="flex flex-col gap-1">
        <h3 className="max-w-2xl">
          <a href="#" className="line-clamp-2">
            {videoTitle}
          </a>
        </h3>

        <div className="text-sm text-gray-400">
          <div>
            <span className="after:mx-1 after:content-['•']">
              {videoViews} views
            </span>
            <span>{videoAge}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
