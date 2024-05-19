export interface ResponseTravelLog {
  pageInfo: {
    page: number;
    hasNext: number;
    hasPrevious: number;
    totalElements: number;
    totalPages: number;
  };
  data: TravelLog[];
}

export interface TravelLog {
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

export interface ResponseReview {
  pageInfo: {
    page: number;
    hasNext: number;
    hasPrevious: number;
    totalElements: number;
    totalPages: number;
  };
  data: Review[];
}

export interface Review {
  id: number;
  score: number;
  commentCount: number;
  imageSrc: string;
  title: string;
  description: string;
  userName: string;
  userImageSrc: string;
}
