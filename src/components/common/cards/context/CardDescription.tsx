import React from "react";
import { useCardContext } from "./CardProvider";
import { cn } from "@/lib/utils/cn";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className }, ref) => {
  const { description } = useCardContext();
  return (
    <div>
      {description && (
        <p className={cn(`line-clamp-1 text-sm text-text-darkest my-2`, className)}>{description}</p>
      )}
    </div>
  );
});
CardTitle.displayName = "CardTitle";

export default CardTitle;
