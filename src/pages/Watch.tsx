import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";

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
    if (currentPlaying && id) dispatch(getRecommendedVideos());
  }, [currentPlaying, id, dispatch]);

  return <div>Watch</div>;
};
