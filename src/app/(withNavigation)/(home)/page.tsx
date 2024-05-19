import MobileHomeHeader from "./components/header/MobileHomeHeader";
import MobileNavigation from "@/components/common/MobileNavigation";
import PlaceCityList from "./components/placeCity/PlaceCityList";
import React from "react";
import SearchBar from "../../../components/common/search/SearchBar";

const page = async () => {
  return (
    <main>
      <div className="flex flex-col p-4 pb-20 gap-6">
        <MobileHomeHeader />

        <SearchBar placeholder="여행지를 선택해주세요." />

        <PlaceCityList placeCityType="TRAVEL" moreHref="/travel" />
        <PlaceCityList placeCityType="CITY" moreHref="/city" />
        <PlaceCityList placeCityType="THEME" moreHref="/theme" />

        {/* <TravelStoryList />

        <ReviewList /> */}
      </div>
      <MobileNavigation />
    </main>
  );
};

export default page;
