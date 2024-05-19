export interface GetPlaceCityDTO {
  page: number;
  placeType?: "CITY" | "TRAVEL" | "THEME";
  searchString?: string;
  elementCnt?: number;
}

export interface ResponsePlaceCity {
  pageInfo: {
    page: number;
    hasNext: number;
    hasPrevious: number;
    totalElements: number;
    totalPages: number;
  };
  data: PlaceCity[];
}

export interface PlaceCity {
  id: number;
  placeCityId: string;
  name: string;
  subName: string;
}
