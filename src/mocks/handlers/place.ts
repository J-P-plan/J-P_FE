import { HttpResponse, http } from "msw";

import { ResponsePlace } from "@/lib/types/place";
import { placeResponse } from "../response/place";

export const getPlaces = http.get<never, never, ResponsePlace>(
  `${process.env.API_HOST}/place`,
  () => {
    return HttpResponse.json(placeResponse);
  }
);
