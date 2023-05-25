import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getVideoDetails } from "../store/reducers/youtubeSliceReducers/getVideoDetails";
import { getRecommendedVideos } from "../store/reducers/youtubeSliceReducers/getRecommendedVideos";
import { Navbar } from "../components/Navbar";

import { BiLike, BiDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { HiScissors } from "react-icons/hi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

export const Watch = () => {
  const [showMoreStatus, setShowMoreStatus] = useState<boolean>(false);

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.currentPlaying
  );

  const { videoTitle } = currentPlaying;

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
      setShowMoreStatus(false);
      return;
    }

    navigate("/");
  }, [dispatch, id, navigate]);

  useEffect(() => {
    if (currentPlaying && id) dispatch(getRecommendedVideos(id));
  }, [currentPlaying, id, dispatch]);

  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className="max-h-scren overflow-hidden">
          <div className="" style={{ height: "7.5vh" }}>
            <Navbar />
          </div>

          <div style={{ height: "92.5vh" }} className="flex w-full">
            <div className="ml-20 mr-0 flex w-full gap-x-5 gap-y-10 overflow-auto p-7">
              <div className="" style={{ maxWidth: "800px" }}>
                <div>
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay-1`}
                    style={{
                      border: "1px solid black",
                    }}
                    width="800"
                    height="500"
                    allowFullScreen
                    title="Youtube video player"
                  ></iframe>

                  <div className="mt-5">
                    <p className="text-xl">{videoTitle}</p>

                    <div className="mt-1 flex justify-between">
                      <div className="text-sm text-gray-400">
                        <span className="after:mx-1 after:content-['•']">
                          {currentPlaying.videoViews} views
                        </span>
                        <span>{currentPlaying.videoAge} ago</span>
                      </div>

                      <div className="flex items-center gap-4 uppercase">
                        <div className="watch-icon">
                          <BiLike className="text-xl" />
                          <strong>{currentPlaying.videoLikes}</strong>
                        </div>

                        <div className="watch-icon">
                          <BiDislike className="text-xl" />
                          <strong>dislike</strong>
                        </div>

                        <div className="watch-icon">
                          <FaShare className="text-xl" />
                          <strong>share</strong>
                        </div>

                        <div className="watch-icon">
                          <HiScissors className="text-xl" />
                          <strong>clip</strong>
                        </div>

                        <div className="watch-icon">
                          <MdOutlinePlaylistAdd className="text-xl" />
                          <strong>save</strong>
                        </div>

                        <div className="watch-icon">
                          <BsThreeDots className="text-xl" />
                        </div>
                      </div>
                    </div>

                    <div className="my-5 flex flex-col gap-4 border-2 border-solid border-gray-400 border-l-transparent border-r-transparent py-3">
                      <div className="mr-5 flex items-center gap-5">
                        <div>
                          <img
                            src={currentPlaying.channelInfo.image}
                            alt="channel-image"
                            className="h-12 w-12 rounded-full"
                          />
                        </div>

                        <div className="w-5/6">
                          <h5 className="text-sm">
                            <strong>{currentPlaying.channelInfo.name}</strong>
                          </h5>
                          <h6 className="text-xs text-gray-400">
                            {currentPlaying.channelInfo.subscribers} subscribers
                          </h6>
                        </div>

                        <div>
                          <button className="rounded-sm bg-red-600 p-2 text-sm uppercase tracking-wider">
                            subscribe
                          </button>
                        </div>
                      </div>

                      <div
                        className={`w-11/12 text-sm ${
                          !showMoreStatus ? "max-h-16 overflow-hidden" : ""
                        }`}
                      >
                        <pre
                          style={{ fontFamily: "'Roboto', san-serif" }}
                          className="whitespace-pre-wrap"
                        >
                          {currentPlaying.videoDescription}
                        </pre>
                      </div>

                      <div>
                        <button
                          className="cursor-pointer text-sm uppercase"
                          onClick={() => setShowMoreStatus(!showMoreStatus)}
                        >
                          Show {showMoreStatus ? "less" : "more"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
