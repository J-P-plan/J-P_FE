import Image from "next/image";
import React from "react";
import { useCardContext } from "./CardProvider";

const CardImage = () => {
  const { imageSrc } = useCardContext();
  return (
    <div className="flex-shrink-0">
      <Image
        className="h-48 w-200 object-cover rounded-lg"
        src={imageSrc || "https://www.ghibli.jp/gallery/ponyo016.jpg"}
        alt="Ponyo"
        width={200}
        height={100}
      />
    </div>
  );
};

export default CardImage;
