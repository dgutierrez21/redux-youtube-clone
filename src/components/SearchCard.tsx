import { Link } from "react-router-dom";
import { HomePageVideos } from "../Types";

export const SearchCard = ({
  videoThumbnail,
  videoId,
}: HomePageVideos) => {
  return (
    <div className="flex gap-3">
      <div className="relative">
        <Link to={`/watch/${videoId}`}>
          <img src={videoThumbnail} alt="thumbnail" className="h-52 w-96" />
        </Link>
      </div>
    </div>
  );
};
