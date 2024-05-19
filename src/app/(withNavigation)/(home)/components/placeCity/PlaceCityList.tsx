import CityTrendingItem from "./CityTrendingItem";
import { PlaceAPI } from "@/lib/api/placeCity";
import React from "react";
import ThemeItem from "./PlaceThemeItem";
import TravelItem from "./PlaceTrendingItem";
import WithTitleWrapper from "@/components/common/WithTitleWrapper";

const PlaceCityMap = {
  CITY: {
    component: CityTrendingItem,
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
  placeCityType: "CITY" | "TRAVEL" | "THEME";
  moreHref: string;
}

const PlaceCityList = async ({ placeCityType, moreHref }: Props) => {
  const { data: placeCities } = await PlaceAPI.getPlace({
    page: 1,
    placeType: placeCityType,
    elementCnt: 10,
  });

  const placeCityItem = PlaceCityMap[placeCityType];

  return (
    <WithTitleWrapper title={placeCityItem.title} moreHref={moreHref}>
      <ul className="flex overflow-x-auto space-x-2 ">
        {placeCities.map((placeCity, index) => (
          <placeCityItem.component
            key={placeCity.placeCityId}
            placeCity={placeCity}
            priority={index < 5}
          />
        ))}
      </ul>
    </WithTitleWrapper>
  );
};

export default PlaceCityList;
