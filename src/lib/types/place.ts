export interface IGetPlaceDTO {
  page: number;
  placeType?: "CITY" | "TRAVEL" | "THEME";
  searchString?: string;
  elementCnt?: number;
}

export interface IResponsePlace {
  pageInfo: {
    page: number;
    hasNext: number;
    hasPrevious: number;
    totalElements: number;
    totalPages: number;
  };
  data: IPlace[];
}

export interface IPlace {
  id: number;
  placeId: string;
  name: string;
  subName: string;
}
