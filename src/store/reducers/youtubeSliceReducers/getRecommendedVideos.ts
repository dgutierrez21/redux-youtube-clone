import { createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_API, parseRecommendedData } from "../../../utilities";
import { RecommendedVideos } from "../../../Types";
import { RootState } from "../..";

const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_DATA_API_KEY;

export const getRecommendedVideos = createAsyncThunk(
  "youtubeApp/getRecommendedVideos",
  async (videoId: string, { getState }) => {
    const {
      youtubeApp: {
        currentPlaying: {
          channelInfo: { id: channelId },
        },
      },
    } = getState() as RootState;

    const {
      data: { items },
    } = await YOUTUBE_API.get(
      `/activities?key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=video&videoId=${videoId}`
    );

    const awaitParseData = await parseRecommendedData(items, videoId);

    if (awaitParseData == null) return;

    const parsedData: RecommendedVideos[] = awaitParseData;

    return { parsedData };
  }
);
