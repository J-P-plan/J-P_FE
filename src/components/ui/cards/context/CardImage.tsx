import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils/cn";
import { useCardContext } from "./CardProvider";

const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { imageSrc } = useCardContext();
  return (
    <div className={cn("shrink-0", className)} ref={ref}>
      <Image
        className="size-20 rounded-lg object-cover"
        src={imageSrc || "https://www.ghibli.jp/gallery/ponyo016.jpg"}
        alt="Ponyo"
        width={80}
        height={80}
        {...props}
      />
    </div>
  );
});

CardImage.displayName = "CardImage";
export default CardImage;
