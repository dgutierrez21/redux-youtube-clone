import { initialState } from "../../Types";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../reducers/youtubeSliceReducers/getHomePageVideos";
import { getSearchPageVideos } from "../reducers/youtubeSliceReducers/getSearchPageVideos";
import { getVideoDetails } from "../reducers/youtubeSliceReducers/getVideoDetails";
import { getRecommendedVideos } from "../reducers/youtubeSliceReducers/getRecommendedVideos";

const initialState: initialState = {
  videos: [],
  currentPlaying: {
    videoId: "",
    videoTitle: "",
    videoDescription: "",
    videoViews: "",
    videoLikes: "",
    videoAge: "",
    channelInfo: {
      id: "",
      image: "",
      name: "",
      subscribers: "",
    },
  },
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: [],
};

export const YoutubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.nextPageToken = null;

      console.log("clear");
    },
    changeSearchTerm: (state, { payload }: PayloadAction<string>) => {
      state.searchTerm = payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      if (action.payload == undefined) return;

      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });

    builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
      if (action.payload == undefined) return;

      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });

    builder.addCase(getVideoDetails.fulfilled, (state, action) => {
      state.currentPlaying = action.payload;
    });

    builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
      if (action.payload == undefined) return;

      state.recommendedVideos = action.payload.parsedData;
    });
  },
});

export const { clearVideos, changeSearchTerm, clearSearchTerm } =
  YoutubeSlice.actions;
