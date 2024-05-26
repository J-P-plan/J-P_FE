import MobileHomeHeader from "../../../components/common/header/MobileHomeHeader";
import PlaceCityList from "./components/placeCity/PlaceCityList";
import React from "react";
import ReviewList from "./components/review/ReviewList";
import SearchBar from "../../../components/common/search/SearchBar";
import TravelLogList from "./components/TravleLogList";

const page = async () => {
  return (
    <>
      <MobileHomeHeader />
      <main className="flex flex-col gap-6 px-4 py-20">
        <SearchBar placeholder="여행지를 선택해주세요." />

        <PlaceCityList
          placeCityType="TRAVEL_PLACE"
          moreHref="/place-trending"
        />
        <PlaceCityList placeCityType="CITY" moreHref="/city-trending" />
        <PlaceCityList placeCityType="THEME" moreHref="/place-theme" />

        <TravelLogList />
        <ReviewList />
      </main>
    </>
  );
};

export default page;
