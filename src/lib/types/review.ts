import { PageInfo } from "./common";

export interface ResponseReview {
  pageInfo: PageInfo;
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
