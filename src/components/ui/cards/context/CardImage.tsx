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
    <div className={cn("flex-shrink-0", className)} ref={ref}>
      <Image
        className="h-48 w-200 object-cover rounded-lg"
        src={imageSrc || "https://www.ghibli.jp/gallery/ponyo016.jpg"}
        alt="Ponyo"
        width={200}
        height={100}
        {...props}
      />
    </div>
  );
});

CardImage.displayName = "CardImage";
export default CardImage;