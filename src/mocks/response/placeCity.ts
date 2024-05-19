import { ResponsePlaceCity } from "@/lib/types/placeCity";

export const placeResponse: ResponsePlaceCity = {
  pageInfo: {
    page: 1,
    hasNext: 1,
    hasPrevious: 0,
    totalElements: 2,
    totalPages: 1,
  },
  data: [
    {
      id: 1,
      placeCityId: "hdaasdasdasdasas",
      name: "서울",
      subName: "서울",
    },
    {
      id: 2,
      placeCityId: "asdasfasfasfas",
      name: "대전",
      subName: "대전",
    },
  ],
};
