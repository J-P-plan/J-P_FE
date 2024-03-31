import React from "react";
import { Tag } from "../../Tag";
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
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {tagList?.map(tag => (
        <Tag key={tag} variant="default">
          {tag}
        </Tag>
      ))}
    </div>
  );
});

CardTags.displayName = "CardTags";

export default CardTags;