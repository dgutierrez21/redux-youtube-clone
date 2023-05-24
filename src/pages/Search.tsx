import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { SideBar } from "../components/SideBar";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../components/Spinner";
import { HomePageVideos } from "../Types";
import { getSearchPageVideos } from "../store/reducers/youtubeSliceReducers/getSearchPageVideos";
import { useNavigate } from "react-router-dom";
import { SearchCard } from "../components/SearchCard";

export const Search = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  useEffect(() => {
    if (!searchTerm) navigate("/");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <SideBar />

        {videos.length ? (
          <div className="flex w-full flex-col gap-5 py-8 pl-8">
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={650}
            >
              <div className="my-5">
                {videos.map((item: HomePageVideos) => (
                  <SearchCard key={item.videoId} {...item} />
                ))}
              </div>
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};
