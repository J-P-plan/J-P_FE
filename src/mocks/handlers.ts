import { getReviews } from "./handlers/review";
import { getTravelLogs } from "./handlers/travelLog";

export const handlers = [getTravelLogs, getReviews];
