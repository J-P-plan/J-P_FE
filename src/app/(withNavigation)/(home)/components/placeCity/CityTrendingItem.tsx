import Image from "next/image";
import { PlaceCity } from "@/lib/types/placeCity";
import React from "react";

interface Props {
  placeCity: PlaceCity;
  priority?: boolean;
}

const CityTrendingItem = ({ placeCity, priority }: Props) => {
  const img = "https://www.ghibli.jp/gallery/ponyo016.jpg";
  return (
    <li className="relative flex flex-none items-center gap-4">
      <Image
        src={img}
        alt={placeCity.name + "이미지"}
        className="size-30 rounded-lg object-cover"
        width={120}
        height={120}
        priority={priority}
      />
      <p className="absolute bottom-3 right-4 font-bold capitalize leading-[normal] text-white">
        {placeCity.name}
      </p>
    </li>
  );
};

export default CityTrendingItem;
