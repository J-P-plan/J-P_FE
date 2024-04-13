import React from "react";
import { cn } from "@/lib/utils/cn";
import { useCardContext } from "./CardProvider";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { title, description } = useCardContext();
  return (
    <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props}>
      <h2 className="text-[#1a1a1a]  text-sm font-bold leading-[140%]">
        {title}
      </h2>
      {description && (
        <p className="text-[#1a1a1a] whitespace-no-wrap  text-sm leading-[140%]">
          {description}
        </p>
      )}
    </div>
  );
});
CardTitle.displayName = "CardTitle";

export default CardTitle;
