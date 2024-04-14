export interface IResponseTravelStory {
  pageInfo: {
    page: number;
    hasNext: number;
    hasPrevious: number;
    totalElements: number;
    totalPages: number;
  };
  data: ITravelStory[];
}

export interface ITravelStory {
  id: number;
  isLike: boolean;
  likeCount: number;
  commentCount: number;
  imageSrc: string;
  title: string;
  tagList: string[];
  userName: string;
  userImageSrc: string;
}

export interface IResponseReview {
  pageInfo: {
    page: number;
    hasNext: number;
    hasPrevious: number;
    totalElements: number;
    totalPages: number;
  };
  data: IReview[];
}

export interface IReview {
  id: number;
  score: number;
  commentCount: number;
  imageSrc: string;
  title: string;
  description: string;
  userName: string;
  userImageSrc: string;
}
