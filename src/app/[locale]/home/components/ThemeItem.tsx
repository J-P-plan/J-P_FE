import { IPlace } from "@/lib/types/place";
import Image from "next/image";
import React from "react";

interface Props {
  place: IPlace;
}

const ThemeItem = ({ place }: Props) => {
  const img = "https://www.ghibli.jp/gallery/ponyo016.jpg";
  return (
    <li className="flex-none flex items-center relative">
      <Image
        src={img}
        alt="travel"
        className="w-28 h-28 object-cover rounded-lg"
        width={120}
        height={120}
      />
      <div className="absolute left-4 bottom-3 text-white">
        <p className="title flex-shrink-0 w-[4.4375rem] h-[1.0625rem] overflow-hidden text-white whitespace-no-wrap font-['SUIT'] text-sm font-bold leading-[normal] capitalize">
          {place.name}
        </p>
        <p className="text-white font-['SUIT'] text-xs font-bold leading-[normal] capitalize">
          {place.subName}
        </p>
      </div>
    </li>
  );
};

export default ThemeItem;
