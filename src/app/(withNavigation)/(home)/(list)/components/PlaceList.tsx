import React from "react";
import PlaceItem from "./PlaceItem";

const PlacePropsMap = {
    CITY: {
      useCityName: true,
      useDiscription: false,
      useTheme: false,
    },
    TRAVEL: {
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
  placeCityType: "CITY" | "TRAVEL" | "THEME";
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
