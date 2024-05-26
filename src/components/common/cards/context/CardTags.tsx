import React from "react";
import { Tag } from "../../../ui/Tag";
import { cn } from "@/lib/utils/cn";
import { useCardContext } from "./CardProvider";

const CardTags = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { tagList } = useCardContext();

  return (
    <div
      ref={ref}
      className={cn(
        "grid w-full auto-cols-max grid-flow-col gap-2 overflow-scroll scrollbar-hide",
        className
      )}
      {...props}
    >
      {tagList?.map(tag => (
        <Tag key={tag} variant="outline">
          <p className="flex items-center justify-center text-xs text-[#4d4d4d]">
            {tag}
          </p>
        </Tag>
      ))}
    </div>
  );
});

CardTags.displayName = "CardTags";

export default CardTags;
