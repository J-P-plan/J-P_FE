import { HttpResponse, http } from "msw";

import { travelStoryResponse } from "../response/travelStory";

export const getTravelStories = http.get(
  `${process.env.API_HOST}/story`,
  () => {
    return HttpResponse.json(travelStoryResponse);
  }
);
