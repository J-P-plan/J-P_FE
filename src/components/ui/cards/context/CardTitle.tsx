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
      <h2 className="text-sm  font-bold leading-[140%] text-[#1a1a1a]">
        {title}
      </h2>
      {description && (
        <p className="whitespace-nowrap text-sm leading-[140%] text-[#1a1a1a]">
          {description}
        </p>
      )}
    </div>
  );
});
CardTitle.displayName = "CardTitle";

export default CardTitle;
