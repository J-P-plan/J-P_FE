import MobileHomeHeader from "./components/MobileHomeHeader";
import MobileNavigation from "@/components/common/MobileNavigation";
import PlaceList from "./components/PlaceList";
import React from "react";
import ReviewList from "./components/ReviewList";
import SearchPlace from "./components/SearchPlace";
import TravelStoryList from "./components/TravelStoryList";

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