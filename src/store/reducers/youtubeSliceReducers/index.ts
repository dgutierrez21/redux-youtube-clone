import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { YOUTUBE_API } from "../../../utilities/constants";

const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  "youtubeApp/homePageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState() as RootState;

    const {
      data: { items, nextPageToken },
    } = await YOUTUBE_API.get(
      `/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet,statistics&type=video`
    );

    console.log(items);
  }
);
