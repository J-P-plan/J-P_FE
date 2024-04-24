import Header from "../../../components/common/Header";
import PlaceList from "./components/PlaceList";
import React from "react";

const page = async () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-6">
        <PlaceList placeType="TRAVEL" />
        <PlaceList placeType="CITY" />
        <PlaceList placeType="THEME" />
      </div>
    </div>
  );
};

export default page;
