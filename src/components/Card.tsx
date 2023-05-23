import { Link } from "react-router-dom";
import { HomePageVideos } from "../Types";

export const Card = ({ videoThumbnail, videoId }: HomePageVideos) => {
  return (
    <div className="flex h-60 w-64 flex-col gap-3">
      <div>
        <Link to={`/watch/${videoId}`}>
          <img src={videoThumbnail} alt="thumbnail" className="h-44 w-72" />
        </Link>
      </div>
    </div>
  );
};
