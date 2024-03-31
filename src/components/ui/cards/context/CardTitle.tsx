import React from "react";
import { cn } from "@/lib/utils/cn";
import { useCardContext } from "./CardProvider";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { title, description } = useCardContext();
  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  );
});
CardTitle.displayName = "CardTitle";

export default CardTitle;
