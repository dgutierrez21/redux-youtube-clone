import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { YOUTUBE_API, parseData } from "../../../utilities";
import { HomePageVideos } from "../../../Types";

const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_DATA_API_KEY;

export const getSearchPageVideos = createAsyncThunk(
  "youtubeApp/searchPageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos, searchTerm },
    } = getState() as RootState;

    const youtubeUrl = `/search?=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${
      isNext ? `pageToken=${nextPageTokenFromState}` : ""
    }`;

    const {
      data: { items, nextPageToken },
    } = await YOUTUBE_API.get(youtubeUrl);

    const awaitParseData = await parseData(items);

    if (awaitParseData == null) return;

    const parsedData: HomePageVideos[] = awaitParseData;

    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }
);
