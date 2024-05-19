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
    <li className="flex-none flex items-center relative">
      <Image
        src={img}
        alt="travel"
        className="w-36 h-32 object-cover rounded-lg"
        width={144}
        height={128}
        priority={priority}
      />
      <div className="absolute left-4 bottom-3 text-white">
        <p className="title flex-shrink-0 w-[4.4375rem] h-[1.0625rem] overflow-hidden text-white whitespace-no-wrap text-sm font-bold leading-[normal] capitalize">
          {placeCity.name}
        </p>
        <p className="text-white text-xs font-bold leading-[normal] capitalize">
          {placeCity.subName}
        </p>
      </div>
    </li>
  );
};

export default PlaceThemeItem;
