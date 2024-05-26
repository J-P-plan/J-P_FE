import CityTrendingItem from "./CityTrendingItem";
import { PlaceCityAPI } from "@/lib/api/placeCity";
import { PlaceCityType } from "@/lib/types/placeCity";
import PlaceThemeItem from "./PlaceThemeItem";
import PlaceTrendingItem from "./PlaceTrendingItem";
import React from "react";
import WithTitleWrapper from "@/components/common/wrapper/WithTitleWrapper";

const PlaceCityMap = {
  CITY: {
    component: CityTrendingItem,
    title: "인기 여행 도시",
  },
  TRAVEL_PLACE: {
    component: PlaceTrendingItem,
    title: "지금 가장 인기있는 여행지",
  },
  THEME: {
    component: PlaceThemeItem,
    title: "지금가면 좋은 여행지",
  },
};

interface Props {
  placeCityType: PlaceCityType;
  moreHref: string;
}

const PlaceCityList = async ({ placeCityType, moreHref }: Props) => {
  const { data: placeCities } = await PlaceCityAPI.getPlaceCitys({
    page: 1,
    placeType: placeCityType,
    elementCnt: 10,
  });

  const placeCityItem = PlaceCityMap[placeCityType];

  return (
    <WithTitleWrapper title={placeCityItem.title} moreHref={moreHref}>
      <ul className="flex snap-x snap-mandatory gap-2 overflow-x-auto scrollbar-hide ">
        {placeCities.map((placeCity, index) => (
          <placeCityItem.component
            key={placeCity.placeId}
            placeCity={placeCity}
            priority={index < 5}
            className="snap-start"
          />
        ))}
      </ul>
    </WithTitleWrapper>
  );
};

export default PlaceCityList;
