import { PageInfo } from "./common";

export interface GetPlaceCityDTO {
  page: number;
  placeType?: PlaceCityType;
  searchString?: string;
  elementCnt?: number;
}

export type PlaceCityType = "CITY" | "TRAVEL_PLACE" | "THEME";

export interface ResponsePlaceCity {
  pageInfo: PageInfo;
  data: PlaceCity[];
}

export interface PlaceCity {
  id: number;
  placeId: string;
  name: string;
  subName: string;
  photoUrl: string | null;
}
