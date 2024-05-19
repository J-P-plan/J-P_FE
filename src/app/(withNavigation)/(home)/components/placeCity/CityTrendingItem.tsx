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
    <li className="flex-none flex items-center gap-4 relative">
      <Image
        src={img}
        alt="travel"
        className="w-30 h-30 object-cover rounded-lg"
        width={120}
        height={120}
        priority={priority}
      />
      <p className="absolute right-4 bottom-3 text-white font-bold leading-[normal] capitalize">
        {placeCity.name}
      </p>
    </li>
  );
};

export default CityTrendingItem;
