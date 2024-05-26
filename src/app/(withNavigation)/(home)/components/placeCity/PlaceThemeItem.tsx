import Image from "next/image";
import { PlaceCity } from "@/lib/types/placeCity";
import React from "react";

interface Props {
  placeCity: PlaceCity;
  priority?: boolean;
}

const PlaceThemeItem = ({ placeCity, priority }: Props) => {
  const img = "https://www.ghibli.jp/gallery/ponyo016.jpg";
  return (
    <li className="flex flex-none flex-col gap-2">
      <Image
        src={img}
        alt={placeCity.name + "이미지"}
        className="size-30 rounded-lg object-cover"
        width={120}
        height={120}
        priority={priority}
      />
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold capitalize leading-[normal]">
          {placeCity.name}
        </p>
        <p className="text-xs font-bold capitalize leading-[normal] text-[#666]">
          {placeCity.subName}
        </p>
      </div>
    </li>
  );
};

export default PlaceThemeItem;
