import { IPlace } from "@/lib/types/place";
import Image from "next/image";
import React from "react";

interface Props {
  place: IPlace;
}

const TravelItem = ({ place }: Props) => {
  const img = "https://www.ghibli.jp/gallery/ponyo016.jpg";
  return (
    <li className="flex-none flex items-center flex-col gap-2">
      <Image
        src={img}
        alt="travel"
        className="w-30 h-30 object-cover rounded-lg"
        width={120}
        height={120}
        priority
      />
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold leading-[normal] capitalize">
          {place.name}
        </p>
        <p className="text-[#666] text-xs font-bold leading-[normal] capitalize">
          {place.subName}
        </p>
      </div>
    </li>
  );
};

export default TravelItem;
