import { HttpResponse, http } from "msw";

import { ResponsePlaceCity } from "@/lib/types/placeCity";
import { placeResponse } from "../response/placeCity";

export const getPlaceCitys = http.get<never, never, ResponsePlaceCity>(
  `${process.env.API_HOST}/place/page`,
  () => {
    return HttpResponse.json(placeResponse);
  }
);
