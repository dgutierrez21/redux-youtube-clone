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

    const youtubeUrl = `/search?maxResults=20&q=reactjs%20projects&key=${API_KEY}&part=snippet&type=video`;

    const {
      data: { items, nextPageToken },
    } = await YOUTUBE_API.get(youtubeUrl);

    console.log(items);
  }
);
