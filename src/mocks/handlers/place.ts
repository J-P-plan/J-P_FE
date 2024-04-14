import { HttpResponse, http } from "msw";

import { IResponsePlace } from "@/lib/types/place";
import { placeResponse } from "../response/place";

export const getPlaces = http.get<never, never, IResponsePlace>(
  `${process.env.API_HOST}/place`,
  () => {
    return HttpResponse.json(placeResponse);
  }
);
