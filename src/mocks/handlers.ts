import { HttpResponse, http } from "msw";

import { IResponsePlace } from "@/lib/types/place";

export const handlers = [
  http.get<never, never, IResponsePlace>(
    "http://jandp-travel.kro.kr/place",
    () => {
      return HttpResponse.json({
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
          },
          {
            id: 2,
            placeId: "asdasfasfasfas",
            name: "대전",
            subName: "대전",
          },
        ],
      });
    }
  ),
];
