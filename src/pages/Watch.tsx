import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getVideoDetails } from "../store/reducers/youtubeSliceReducers/getVideoDetails";
import { getRecommendedVideos } from "../store/reducers/youtubeSliceReducers/getRecommendedVideos";
import { Navbar } from "../components/Navbar";

export const Watch = () => {
  const [showMoreStatus, setShowMoreStatus] = useState<boolean>(false);

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.currentPlaying
  );

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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
