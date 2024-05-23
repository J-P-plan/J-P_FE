import Image from "next/image";
import { PlaceCity } from "@/lib/types/placeCity";
import React from "react";

interface Props {
  placeCity: PlaceCity;
  priority?: boolean;
}

const PlaceTrendingItem = ({ placeCity, priority }: Props) => {
  const img = "https://www.ghibli.jp/gallery/ponyo016.jpg";
  return (
    <li className="flex-none flex items-center flex-col gap-2">
      <Image
        src={img}
        alt={placeCity.name + "이미지"}
        className="w-30 h-30 object-cover rounded-lg"
        width={120}
        height={120}
        priority={priority}
      />
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold leading-[normal] capitalize">
          {placeCity.name}
        </p>
        <p className="text-[#666] text-xs font-bold leading-[normal] capitalize">
          {placeCity.subName}
        </p>
      </div>
    </li>
  );
};

export default PlaceTrendingItem;
