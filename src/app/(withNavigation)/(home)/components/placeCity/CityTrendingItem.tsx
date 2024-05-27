import Image from "next/image";
import { PlaceCity } from "@/lib/types/placeCity";
import React from "react";
import { cn } from "@/lib/utils/cn";

interface Props {
  placeCity: PlaceCity;
  priority?: boolean;
  className?: string;
}

const CityTrendingItem = ({ placeCity, priority, className }: Props) => {
  const img = "https://www.ghibli.jp/gallery/ponyo016.jpg";
  return (
    <li className={cn("relative flex flex-none items-center", className)}>
      <Image
        src={img}
        alt={placeCity.name + "이미지"}
        className="size-[7.5rem] rounded-lg object-cover"
        width={120}
        height={120}
        priority={priority}
      />
      <div className="absolute bottom-2 right-2 rounded-full bg-white/70 px-2.5 py-0.5">
        <p className="  text-sm font-bold capitalize leading-[normal] text-gray-700 ">
          {placeCity.name}
        </p>
      </div>
    </li>
  );
};

export default CityTrendingItem;
