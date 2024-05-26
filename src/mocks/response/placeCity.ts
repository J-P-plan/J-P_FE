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
      placeId: "hdaasdasdasdasas",
      name: "서울",
      subName: "서울",
      photoUrl: null,
    },
    {
      id: 2,
      placeId: "asdasfasfasfas",
      name: "대전",
      subName: "대전",
      photoUrl: null,
    },
    {
      id: 3,
      placeId: "asdasfass",
      name: "인천",
      subName: "인천",
      photoUrl: null,
    },
    {
      id: 4,
      placeId: "asdasfas212sfas",
      name: "동해",
      subName: "강원도",
      photoUrl: null,
    },
  ],
};
