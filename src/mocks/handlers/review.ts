import { HttpResponse, http } from "msw";

import { reviewResponse } from "../response/review";

export const getReviews = http.get(`${process.env.API_HOST}/reviews`, () => {
  return HttpResponse.json(reviewResponse);
});
