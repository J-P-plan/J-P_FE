import Image from "next/image";
import { Place } from "@/lib/types/place";
import React from "react";

interface Props {
  place: Place;
  priority?: boolean;
}

const CityItem = ({ place, priority }: Props) => {
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
        {place.name}
      </p>
    </li>
  );
};

export default CityItem;
