import { HttpResponse, http } from "msw";

import { reviewResponse } from "../response/review";

export const getReviews = http.get(`${process.env.API_HOST}/review`, () => {
  return HttpResponse.json(reviewResponse);
});
