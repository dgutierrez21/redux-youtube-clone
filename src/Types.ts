export interface HomePageVideos {}
export interface CurrentPlaying {}
export interface RecommendedVideos {}

export interface initialState {
  videos: HomePageVideos[];
  currentPlaying: CurrentPlaying | null;
  searchTerm: string;
  searchResults: [];
  nextPageToken: string | null;
  recommendedVideos: RecommendedVideos[];
}
