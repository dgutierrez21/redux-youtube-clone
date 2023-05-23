import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { SideBar } from "../components/SideBar";
import { useAppDispatch } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/youtubeSliceReducers/getHomePageVideos";

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <SideBar />
      </div>
    </div>
  );
};
