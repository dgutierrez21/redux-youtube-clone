import axios from "axios";

export const YOUTUBE_API = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
});
