export interface GetPlaceListDTO {
  page: number;
  placeType?: "CITY" | "TRAVEL_PLACE" | "THEME";
  searchString?: string;
  elementCnt?: number;
}
  
  
export interface ResponsePlaceList {
  pageInfo: {
    page: number;
    hasNext: boolean;
    hasPrevious: boolean;
    totalElements: number;
    totalPages: number;
  };
  data: PlaceList[];
}
  
export interface PlaceList {
  id: number;
  placeId: string;
  name: string;
  subName: string;
  photoUrl: string;
}
  