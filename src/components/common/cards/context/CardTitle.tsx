import React from "react";
import { cn } from "@/lib/utils/cn";
import { useCardContext } from "./CardProvider";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { title, description } = useCardContext();
  return (
    <div ref={ref} className={cn("flex flex-col gap-1", className)} {...props}>
      <h2 className="text-sm-bold text-text-darkest">{title}</h2>
      {description && (
        <p className="line-clamp-1 text-sm text-text-darkest">{description}</p>
      )}
    </div>
  );
});
CardTitle.displayName = "CardTitle";

export default CardTitle;
