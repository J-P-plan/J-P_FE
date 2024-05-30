"use client";
import React from "react";
import PlaceItem from "./PlaceItem";
import { PlaceListAPI } from "@/lib/api/placeList";

const PlacePropsMap = {
    CITY: {
      useCityName: true,
      useDiscription: false,
      useTheme: false,
    },
    TRAVEL_PLACE: {
        useCityName: false,
        useDiscription: true,
        useTheme: false,  
    },
    THEME: {
        useCityName: false,
        useDiscription: true,
        useTheme: true,
    },
};
interface Props {
  placeCityType: "CITY" | "TRAVEL_PLACE" | "THEME";
}

const PlaceList = ({ placeCityType } : Props) => {
  const placeCityItem = PlacePropsMap[placeCityType];
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
        <PlaceItem key={index} {...placeCityItem} />
      ))}
    </>
  );
};

export default PlaceList;
