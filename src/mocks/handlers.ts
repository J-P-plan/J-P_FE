import { getPlaces } from "./handlers/place";
import { getReviews } from "./handlers/review";
import { getTravelStories } from "./handlers/travelLog";

export const handlers = [getPlaces, getTravelStories, getReviews];
