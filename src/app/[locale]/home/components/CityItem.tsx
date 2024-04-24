import { IPlace } from "@/lib/types/place";
import Image from "next/image";
import React from "react";

interface Props {
  place: IPlace;
}

const CityItem = ({ place }: Props) => {
  const img = "https://www.ghibli.jp/gallery/ponyo016.jpg";
  return (
    <li className="flex-none flex items-center gap-4 relative">
      <Image
        src={img}
        alt="travel"
        className="w-28 h-28 object-cover rounded-lg"
        width={120}
        height={120}
      />
      <p className="absolute right-4 bottom-3 text-white font-bold leading-[normal] capitalize">
        {place.name}
      </p>
    </li>
  );
};

export default CityItem;
