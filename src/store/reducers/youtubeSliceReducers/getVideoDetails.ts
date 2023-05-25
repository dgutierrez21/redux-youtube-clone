import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  YOUTUBE_API,
  convertRawViewstoString,
  timeSince,
} from "../../../utilities";

const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_DATA_API_KEY;

export const getVideoDetails = createAsyncThunk(
  "youtubeApp/videoDetails",
  async (id: string) => {
    const {
      data: { items },
    } = await YOUTUBE_API.get(
      `/videos?key=${API_KEY}&part=snippet,statistics&type=video&id=${id}`
    );

    return parseData(items[0]);
  }
);

const parseData = async (item: {
  snippet: {
    channelId: string;
    title: string;
    description: string;
    publishedAt: Date;
    channelTitle: string;
  };
  id: string;
  statistics: { viewCount: string; likeCount: string };
}) => {
  const {
    data: {
      items: [
        {
          snippet: {
            thumbnails: {
              default: { url: channelImage },
            },
          },
          statistics: { subscriberCount },
        },
      ],
    },
  } = await YOUTUBE_API.get(
    `/channels?part=snippet,statistics&id=${item.snippet.channelId}&key=${API_KEY}`
  );

  return {
    videoId: item.id,
    videoTitle: item.snippet.title,
    videoDescription: item.snippet.description,
    videoViews: parseInt(item.statistics.viewCount).toLocaleString(),
    videoLikes: convertRawViewstoString(item.statistics.likeCount),
    videoAge: timeSince(new Date(item.snippet.publishedAt)),
    channelInfo: {
      id: item.snippet.channelId,
      image: channelImage,
      name: item.snippet.channelTitle,
      subscribers: convertRawViewstoString(subscriberCount, true),
    },
  };
};
