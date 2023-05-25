import { Link } from "react-router-dom";
import { RecommendedVideos } from "../Types";

export const WatchCard = ({
  videoDuration,
  videoThumbnail,
  videoId,
  videoTitle,
  channelInfo,
  videoViews,
  videoAge,
}: RecommendedVideos) => {
  return (
    <div className="flex gap-3">
      <div className="relative min-h-fit">
        <span className="absolute bottom-3 right-3 z-10 bg-gray-900 px-2 py-0.5 text-sm">
          {videoDuration}
        </span>

        <Link to={`/watch/${videoId}`}>
          <img
            src={videoThumbnail}
            alt="thumbnail"
            className=" h-24 w-40 rounded-xl transition-all duration-500 ease-in-out hover:rounded-none"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-1">
        <h4 className="text-sm">
          <a href="#" className="line-clamp-2">
            {videoTitle}
          </a>
        </h4>

        <div className="text-xs text-gray-400">
          <a href="#" className="hover:text-white">
            {channelInfo.name}
          </a>
        </div>

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
