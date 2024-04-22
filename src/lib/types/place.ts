export interface GetPlaceDTO {
  page: number;
  placeType?: "CITY" | "TRAVEL" | "THEME";
  searchString?: string;
  elementCnt?: number;
}

export interface ResponsePlace {
  pageInfo: {
    page: number;
    hasNext: number;
    hasPrevious: number;
    totalElements: number;
    totalPages: number;
  };
  data: Place[];
}

export interface Place {
  id: number;
  placeId: string;
  name: string;
  subName: string;
}
