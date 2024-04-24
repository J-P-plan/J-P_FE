import CityItem from "./CityItem";
import { PlaceAPI } from "@/lib/api/place";
import React from "react";
import ThemeItem from "./ThemeItem";
import TravelItem from "./TravelItem";
import WithTitleWrapper from "@/components/common/WithTitleWrapper";

const PlaceMap = {
  CITY: {
    component: CityItem,
    title: "인기 여행 도시",
  },
  TRAVEL: {
    component: TravelItem,
    title: "지금 가장 인기있는 여행지",
  },
  THEME: {
    component: ThemeItem,
    title: "지금가면 좋은 여행지",
  },
};

interface Props {
  placeType: "CITY" | "TRAVEL" | "THEME";
  moreHref: string;
}

const PlaceList = async ({ placeType, moreHref }: Props) => {
  const { data } = await PlaceAPI.getPlace({
    page: 1,
    placeType,
    elementCnt: 10,
  });

  const placeItem = PlaceMap[placeType];

  return (
    <WithTitleWrapper title={placeItem.title} moreHref={moreHref}>
      <ul className="flex overflow-x-auto space-x-2 ">
        {data.map((place, index) => (
          <placeItem.component
            key={place.placeId}
            place={place}
            priority={index < 5}
          />
        ))}
      </ul>
    </WithTitleWrapper>
  );
};

export default PlaceList;
