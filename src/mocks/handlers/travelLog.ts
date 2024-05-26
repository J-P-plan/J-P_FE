import { HttpResponse, http } from "msw";

import { travelLogResponse } from "../response/travelLog";

export const getTravelLogs = http.get(
  `${process.env.API_HOST}/travel-logs`,
  () => {
    return HttpResponse.json(travelLogResponse);
  }
);
