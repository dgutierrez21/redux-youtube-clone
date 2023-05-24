import { initialState } from "../../Types";

import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../reducers/youtubeSliceReducers/getHomePageVideos";

const initialState: initialState = {
  videos: [],
  currentPlaying: null,
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

      console.log("clear")
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      if (action.payload == undefined) return;

      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
  },
});

export const {clearVideos} = YoutubeSlice.actions;