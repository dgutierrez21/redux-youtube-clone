import { Link } from "react-router-dom";
import { HomePageVideos } from "../Types";

export const Card = ({
  videoDuration,
  videoThumbnail,
  videoId,
  channelInfo,
  videoTitle,
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

      <div className="flex gap-2">
        <div className="min-w-fit">
          <a href="#">
            <img
              src={channelInfo.image}
              alt="channel"
              className="h-9 w-9 rounded-full"
            />
          </a>
        </div>

        <h3>
          <a href="#" className="line-clamp-2">
            {videoTitle}
          </a>
        </h3>
      </div>
    </div>
  );
};
