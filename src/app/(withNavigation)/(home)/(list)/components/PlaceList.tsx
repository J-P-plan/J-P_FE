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
// const { data: placeList } = await PlaceListAPI.getPlaceList({
//   page: 1,
//   placeType: placeCityType,
//   elementCnt: 10,
// });


const PlaceList = ({ placeCityType } : Props) => {
  const placeCityItem = PlacePropsMap[placeCityType];
  return (
    <>
      {/* {placeList?.map((_, index) => ( */}
      {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
        <PlaceItem key={index} {...placeCityItem} />
      ))}
    </>
  );
};

export default PlaceList;
