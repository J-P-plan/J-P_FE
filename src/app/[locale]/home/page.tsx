import Header from "../../../components/common/Header";
import MobileMenu from "@/components/common/MobileMenu";
import PlaceList from "./components/PlaceList";
import React from "react";
import ReviewList from "./components/ReviewList";
import TravelStoryList from "./components/TravelStoryList";

const page = async () => {
  return (
    <div className="flex flex-col px-4 gap-6">
      <Header />
      <div className="flex flex-col gap-6">
        <PlaceList placeType="TRAVEL" />
        <PlaceList placeType="CITY" />
        <PlaceList placeType="THEME" />
      </div>
      <div>
        <TravelStoryList />
      </div>
      <div>
        <ReviewList />
      </div>
      <MobileMenu />
    </div>
  );
};

export default page;
