import { PageInfo } from "./common";

export interface ResponseTravelLog {
  pageInfo: PageInfo;
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
