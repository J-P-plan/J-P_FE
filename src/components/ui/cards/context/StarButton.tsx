import React, { useState } from "react";

import { Button } from "../../Button";
import StarIcon from "@/components/icons/StartIcon";
import { cn } from "@/lib/utils/cn";
import { useCardContext } from "./CardProvider";

const StarButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { starRating } = useCardContext();
  const [star, setStar] = useState(false);

  return (
    // [todo]: change click event to update like Api
    <Button
      ref={ref}
      size="icon"
      variant="ghost"
      className={cn("flex items-center gap-1", className)}
      onClick={() => {
        setStar(!star);
      }}
      {...props}
    >
      <StarIcon className="w-4 h-4" />
      <span className="flex items-center text-[#b8b8b8] text-xs">
        {starRating}
      </span>
    </Button>
  );
});

StarButton.displayName = "StarButton";

export default StarButton;
