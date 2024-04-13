import MobileHomeHeader from "./components/MobileHomeHeader";
import MobileMenu from "@/components/common/MobileMenu";
import PlaceList from "./components/PlaceList";
import React from "react";
import ReviewList from "./components/ReviewList";
import SearchPlace from "./components/SearchPlace";
import TravelStoryList from "./components/TravelStoryList";

const page = async () => {
  return (
    <div className="flex flex-col p-4 gap-6">
      <MobileHomeHeader />

      <SearchPlace />

      <PlaceList placeType="TRAVEL" moreHref="travels" />
      <PlaceList placeType="CITY" moreHref="cities" />
      <PlaceList placeType="THEME" moreHref="themes" />

      <TravelStoryList />

      <ReviewList />

      <MobileMenu />
    </div>
  );
};

export default page;
