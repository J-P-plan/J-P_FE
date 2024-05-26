import MobileHomeHeader from "./components/header/MobileHomeHeader";
import MobileNavigation from "@/components/common/MobileNavigation";
import PlaceCityList from "./components/placeCity/PlaceCityList";
import React from "react";
import ReviewList from "./components/ReviewList";
import SearchBar from "../../../components/common/search/SearchBar";
import TravelLogList from "./components/TravleLogList";

const page = async () => {
  return (
    <main>
      <div className="flex flex-col p-4 pb-20 gap-6">
        <MobileHomeHeader />

        <SearchBar placeholder="여행지를 선택해주세요." />

        <PlaceCityList
          placeCityType="TRAVEL_PLACE"
          moreHref="/place-trending"
        />
        <PlaceCityList placeCityType="CITY" moreHref="/city-trending" />
        <PlaceCityList placeCityType="THEME" moreHref="/place-theme" />

        <TravelLogList />
        <ReviewList />
      </div>
      <MobileNavigation />
    </main>
  );
};

export default page;
