import { getPlaces } from "./handlers/place";
import { getReviews } from "./handlers/review";
import { getTravelStories } from "./handlers/travelStory";

export const handlers = [getPlaces, getTravelStories, getReviews];
