import { PageInfo } from "./common";

export interface ResponseReview {
  pageInfo: PageInfo;
  data: Review[];
}

export interface Review {
  id: number;
  subject: string;
  content: string;
  userCompactResDto: UserCompactResDto;
  commentCnt: number;
  star: number;
  placeId: string;
  imageSrc: string;
}

export interface UserCompactResDto {
  id: number;
  nickname: string;
  picture: string;
}
