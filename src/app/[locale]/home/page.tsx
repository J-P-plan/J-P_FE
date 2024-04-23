import MobileHomeHeader from "./components/header/MobileHomeHeader";
import MobileNavigation from "@/components/common/MobileNavigation";
import PlaceList from "./components/place/PlaceList";
import React from "react";
import ReviewList from "./components/review/ReviewList";
import SearchPlace from "./components/header/SearchPlace";
import TravelStoryList from "./components/review/TravelStoryList";

const page = async () => {
  return (
    <main>
      <div className="flex flex-col p-4 pb-20 gap-6">
        <MobileHomeHeader />

        <SearchPlace />

        <PlaceList placeType="TRAVEL" moreHref="travels" />
        <PlaceList placeType="CITY" moreHref="cities" />
        <PlaceList placeType="THEME" moreHref="themes" />

        <TravelStoryList />

        <ReviewList />
      </div>
      <MobileNavigation />
    </main>
  );
};

export default page;
