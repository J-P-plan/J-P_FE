"use client";
import MobileHomeHeader from "@/components/common/header/MobileHomeHeader";
import MobileNavigation from "@/components/common/navigation/MobileNavigation";
import PlaceList from "../components/PlaceList";
import { usePathname } from 'next/navigation';
import React from "react";

type PlaceCityType = {
  "place-theme": string;
  "place-trending": string;
  "city-trending": string;
};

const placeCityType: PlaceCityType = {
  "place-theme": "THEME",
  "place-trending": "TRAVEL_PLACE",
  "city-trending": "CITY",
};

const page = () => {
  const pathname = usePathname();
  const key = pathname.split('/')[1] as keyof PlaceCityType;
  return (
    <main>
      <MobileHomeHeader />
      <div className="flex p-4" style={{flexWrap:"wrap"}}>
      <PlaceList placeCityType={placeCityType[key] as "THEME" | "TRAVEL_PLACE" | "CITY"} />
      </div>
      <MobileNavigation />
    </main>
  );
};

export default page;
