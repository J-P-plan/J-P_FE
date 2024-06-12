export interface ResponseRecommendTravel {
  data: RecommendTravel[];
}

export interface RecommendTravel {
  id: number;
  star: number;
  imageSrc: string;
  title: string;
}

export interface ResponseReview {
  data: ResponseReview[];
}

export interface Review {
  id: number;
  star: number;
  comment: string;
  date: string;
  userId: string;
  userImageSrc: string;
}
