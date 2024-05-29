import Image from "next/image";
import { PlaceCity } from "@/lib/types/placeCity";
import React from "react";
import { cn } from "@/lib/utils/cn";

interface Props {
  placeCity: PlaceCity;
  priority?: boolean;
  className?: string;
}

const PlaceTrendingItem = ({ placeCity, priority, className }: Props) => {
  const img = "https://www.ghibli.jp/gallery/ponyo016.jpg";
  return (
    <li className={cn("flex flex-none flex-col gap-2", className)}>
      <Image
        src={img}
        alt={placeCity.name + "이미지"}
        className="size-[7.5rem] rounded-lg object-cover"
        width={120}
        height={120}
        priority={priority}
      />
      <div className="flex flex-col gap-1">
        <p className="text-sm-bold capitalize">{placeCity.name}</p>
        <p className="text-xs-bold capitalize text-gray-600">
          {placeCity.subName}
        </p>
      </div>
    </li>
  );
};

export default PlaceTrendingItem;
