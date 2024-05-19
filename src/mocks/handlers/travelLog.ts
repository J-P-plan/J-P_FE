import { HttpResponse, http } from "msw";

import { travelStoryResponse } from "../response/travelLog";

export const getTravelStories = http.get(
  `${process.env.API_HOST}/travel-log`,
  () => {
    return HttpResponse.json(travelStoryResponse);
  }
);
