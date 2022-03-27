export interface ISearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: VideoThumbnails;
      medium: VideoThumbnails;
      high: VideoThumbnails;
      standard: VideoThumbnails;
      maxres: VideoThumbnails;
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: {
    viewCount: string | number;
    likeCount: string | number;
    dislikeCount: string | number;
    favoriteCount: string | number;
    commentCount: string | number;
  };
}

type VideoThumbnails = {
  url: string;
  width: number;
  height: number;
};
